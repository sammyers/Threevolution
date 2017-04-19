import * as THREE from 'three';
import { Map } from 'immutable';

import { WORLD_HEIGHT } from '../constants';

const colors = [
    0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff,
    0xffffff
];

export const mapRegionToTile = ({ corner: { x, y }, width, height }) => {
    return Map({
        center: new THREE.Vector3(
            x + width / 2,
            -(WORLD_HEIGHT / 2),
            y - height / 2
        ),
        width,
        length: height,
        color: colors[Math.floor(Math.random() * colors.length)]
    });
};
