import { Map, List } from 'immutable';
import { combineReducers } from 'redux-immutable';

import worldMap from '../map';
import { mapRegionToTile } from '../helpers';
import {
    ADD_COMMUNITY, ADD_COMMUNITY_TO_REGION
} from '../actions/actionTypes';

const initialRegionState = Map({
    borders: List(),
    communities: List()
});

const initialState = Map({
    regions: worldMap.reduce(
        (world, region) => {
            return world.set(
                region.id,
                initialRegionState.merge(mapRegionToTile(region))
            );
        },
        Map()
    ),
    communities: Map()
});

const worldReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMMUNITY:
            return state.setIn(
                ['communities', action.id],
                Map({
                    traits: action.traits,
                    population: action.population
                })
            );
        case ADD_COMMUNITY_TO_REGION:
            return state.updateIn(
                ['regions', action.regionId, 'communities'],
                communities => communities.push(action.id)
            );
        default:
            return state;
    }
};

export default worldReducer;
