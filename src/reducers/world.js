import { Map, List } from 'immutable';
import { combineReducers } from 'redux-immutable';

import worldMap from '../map';
import { mapRegionToTile } from '../helpers';

const initialRegionState = Map({
    borders: List(),
    populations: List()
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
    populations: Map()
});

const worldReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default worldReducer;
