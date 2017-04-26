import { v1 as createUUID } from 'uuid';

import {
    MUTATE_COMMUNITY,
    ADD_COMMUNITY, ADD_COMMUNITY_TO_REGION
} from './actionTypes';
import { generateMutations } from '../helpers';

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

export const addCommunity = (traits, population, regionId) => {
    const id = createUUID();

    return dispatch => {
        dispatch({
            type: ADD_COMMUNITY,
            id,
            traits,
            population
        });
        dispatch(addCommunityToRegion(id, regionId));
    };
};
