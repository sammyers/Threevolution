import { v1 as createUUID } from 'uuid';

import {
    ADD_COMMUNITY, ADD_COMMUNITY_TO_REGION,
    MOVE_COMMUNITY,
    MUTATE_COMMUNITY,
    CHANGE_POPULATION
} from './actionTypes';
import { generateMutations, calculateAdaptationScore, randomColor } from '../helpers';
import {
    getContainingRegion, getBestRegion, getRegionType, getFreeSpace
} from '../selectors';

const mutateCommunity = (id, mutations) => ({
    type: MUTATE_COMMUNITY,
    id,
    mutations
});

export const processMutations = () => {
    return (dispatch, getState) => {
        getState().getIn(['world', 'communities']).forEach(
            (community, id) => {
                const traits = community.get('traits');
                const mutations = generateMutations(traits);
                if (mutations.some(val => val != 0)) {
                    dispatch(mutateCommunity(id, mutations));
                }
            }
        );
    };
};

const addCommunityToRegion = (id, regionId) => ({
    type: ADD_COMMUNITY_TO_REGION,
    id,
    regionId
});

export const addCommunity = (traits, population, regionId, color) => {
    const id = createUUID();

    return dispatch => {
        dispatch({
            type: ADD_COMMUNITY,
            id,
            traits,
            population,
            regionId,
            color
        });
        dispatch(addCommunityToRegion(id, regionId));
    };
};

const moveCommunity = (id, regionId) => ({
    type: MOVE_COMMUNITY,
    id,
    regionId
});

export const moveCommunities = () => {
    return (dispatch, getState) => {
        const state = getState();
        state.getIn(['world', 'communities']).forEach(
            (community, id) => {
                const bestRegion = getBestRegion(state, id);
                if (bestRegion != getContainingRegion(state, id)) {
                    dispatch(moveCommunity(id, bestRegion));
                }
            }
        );
    };
};

export const changePopulation = (communityId, diff) => ({
    type: CHANGE_POPULATION,
    id: communityId,
    diff
});

export const growCommunities = () => {
    return (dispatch, getState) => {
        const state = getState();
        state.getIn(['world', 'communities']).forEach(
            (community, id) => {
                const traits = community.get('traits');
                const region = community.get('regionId');
                const fitness = calculateAdaptationScore(
                    traits,
                    getRegionType(state, region)
                );
                if (fitness > 3) {
                    if (community.get('population') >= 5) {
                        dispatch(changePopulation(id, -1));
                        dispatch(addCommunity(traits, 2, region, randomColor()));
                    } else if (getFreeSpace(state, region) > 0) {
                        dispatch(changePopulation(id, 1));
                    }
                }
            }
        );
    };
};
