import * as THREE from 'three';
import { Map, List } from 'immutable';

import {
    MUTATION_PROBABILITY,
    traitTypes, regionTypes
} from '../constants';
import { addCommunity } from '../actions';

import worldMap from '../map';

const waterRegions = worldMap.filter(
    region => region.type == 'water'
).map(
    region => region.id
);

const initialTraits = Map({
    swimming: 1
});

export const createInitialCommunities = () => {
    return dispatch => {
        for (let regionId of waterRegions) {
            dispatch(addCommunity(initialTraits, 1, regionId))
        }
    };
};

export const mapRegionToTile = region => {
    const { corner: { x, y }, width, length, type, id, borders } = region;
    const { height, color } = regionTypes[type];

    return Map({
        center: new THREE.Vector3(
            x + width / 2,
            height / 2,
            y - length / 2
        ),
        width,
        length,
        height,
        color,
        type,
        id,
        borders: List(borders)
    });
};

const randomChoice = list => list[Math.floor(Math.random() * list.length)];

export const generateMutations = traits => {
    let newTraits = traits.reduce((all, value, name) => {
        let x = Math.random();
        if (x < MUTATION_PROBABILITY / 2) {
            return all.set(name, 1);
        } else if (x < MUTATION_PROBABILITY) {
                return all.set(name, -1);
        } else {
            return all.set(name, 0);
        }
    }, Map())
    if (Math.random() < MUTATION_PROBABILITY) {
        return traits.set(randomChoice(Object.keys(traitTypes)), 1);
    }
    return traits;
};
