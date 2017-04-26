import { Map, List } from 'immutable';
import { combineReducers } from 'redux-immutable';

import worldMap from '../map';
import { mapRegionToTile } from '../helpers';
import {
    ADD_COMMUNITY, ADD_COMMUNITY_TO_REGION,
    MOVE_COMMUNITY,
    MUTATE_COMMUNITY,
    CHANGE_POPULATION
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
                    population: action.population,
                    regionId: action.regionId,
                    color: action.color
                })
            );
        case ADD_COMMUNITY_TO_REGION:
            return state.updateIn(
                ['regions', action.regionId, 'communities'],
                communities => communities.push(action.id)
            );

        case MUTATE_COMMUNITY:
            return state.updateIn(
                ['communities', action.id, 'traits'],
                traits => action.mutations.reduce((all, mutation, trait) => {
                    if (mutation == -1 && traits.get(trait) == 1) {
                        return all.delete(trait);
                    } else {
                        return all.update(
                            trait,
                            0, 
                            val => val + mutation > 6 ? 6 : val + mutation
                        );
                    }
                }, traits)
            );

        case MOVE_COMMUNITY:
            let oldRegionId = state.getIn(['communities', action.id, 'regionId']);
            return state.updateIn(
                ['regions', oldRegionId, 'communities'],
                communities => communities.delete(communities.indexOf(action.id))
            ).updateIn(
                ['regions', action.regionId, 'communities'],
                communities => communities.push(action.id)
            ).setIn(
                ['communities', action.id, 'regionId'],
                action.regionId
            );

        case CHANGE_POPULATION:
            return state.updateIn(
                ['communities', action.id, 'population'],
                pop => pop + action.diff
            );

        default:
            return state;
    }
};

export default worldReducer;
