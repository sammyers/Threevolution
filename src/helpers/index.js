import * as THREE from 'three';
import { Map, List } from 'immutable';

import { MUTATION_PROBABILITY } from '../constants';

const traitTypes = {
    foraging: ['coast', 'forest'],
    longneck: ['forest', 'swamp'],
    hibernation: ['mountains', 'forest'],
    scavenging: ['plains', 'coast'],
    herding: ['plains', 'forest'],
    flying: ['mountains', 'plains'],
    hunting: ['swamp', 'plains'],
    swimming: ['coast', 'swamp'],
    rockscrambling: ['mountains', 'coast'],
    fertility: ['swamp', 'mountains']
};

const regionTypes = {
    forest: {
        color: 0x6b8e23,
        height: 1.4
    },
    plains: {
        color: 0xdaa520,
        height: 1.0
    },
    coast: {
        color: 0xf5deb3,
        height: 0.8
    },
    swamp: {
        color: 0x2f4f4f,
        height: 1.2
    },
    mountains: {
        color: 0xa0522d,
        height: 1.8
    },
    water: {
        color: 0x4682b4,
        height: 0.5
    }
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
            return all.set(name, value + 1);
        } else if (x < MUTATION_PROBABILITY) {
            if (value == 1) {
                return all;
            } else {
                return all.set(name, value - 1);
            }
        } else {
            return all.set(name, value);
        }
    }, Map())
    if (Math.random() < MUTATION_PROBABILITY) {
        return traits.set(randomChoice(Object.keys(traitTypes)), 1);
    }
    return traits;
};
