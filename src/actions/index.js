import { v1 as createUUID } from 'uuid';

import {
    MUTATE_COMMUNITY,
    ADD_COMMUNITY, ADD_COMMUNITY_TO_REGION
} from './actionTypes';

export const mutateCommunity = (id, mutations) => ({
    type: MUTATE_COMMUNITY,
    mutations
});

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
