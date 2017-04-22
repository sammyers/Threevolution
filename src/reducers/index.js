import { Map, List } from 'immutable';
import * as THREE from 'three';

import worldMap from '../map';
import { mapRegionToTile } from '../helpers';

const initialState = Map({
    cameraPosition: new THREE.Vector3(0, 100, 75),
    cameraLookAt: new THREE.Vector3(),
    cubeRotation: new THREE.Euler(),
    lightPosition: new THREE.Vector3(200, 500, 200),
    lightLookAt: new THREE.Vector3(0, 0, 0),
    world: List(worldMap.map(region => mapRegionToTile(region)))
});

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ROTATE_CUBE':
            return state.update(
                'cubeRotation',
                rotation => new THREE.Euler(
                    rotation.x + 0.01,
                    rotation.y + 0.01,
                    0
                )
            );

        default:
            return state;
    }
};

export default rootReducer;
