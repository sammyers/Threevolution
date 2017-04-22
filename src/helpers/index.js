import * as THREE from 'three';
import { Map } from 'immutable';

import { WORLD_HEIGHT } from '../constants';

const regions = {
    forest: {
        color: 0x6b8e23,
        height: 0.8
    },
    plains: {
        color: 0xdaa520,
        height: 0.5
    },
    coast: {
        color: 0xf5deb3,
        height: 0.4,
    },
    swamp: {
        color: 0x2f4f4f,
        height: 0.6
    },
    mountains: {
        color: 0xa0522d,
        height: 1.2
    },
    water: {
        color: 0x4682b4,
        height: 0.4
    }
};

export const mapRegionToTile = ({ corner: { x, y }, width, height, type }) => {
    const region = regions[type];

    return Map({
        center: new THREE.Vector3(
            x + width / 2,
            -((WORLD_HEIGHT - region.height) / 2),
            y - height / 2
        ),
        width,
        length: height,
        height: region.height,
        color: region.color
    });
};
