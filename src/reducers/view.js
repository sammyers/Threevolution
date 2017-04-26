import { Map, List } from 'immutable';
import * as THREE from 'three';

const initialState = Map({
    cameraPosition: new THREE.Vector3(0, 90, 50),
    cameraLookAt: new THREE.Vector3(),
    cubeRotation: new THREE.Euler(),
    lightPosition: new THREE.Vector3(200, 500, 200),
    lightLookAt: new THREE.Vector3(0, 0, 0),
});

const viewReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ROTATE_CUBE':
            return state.update(
                'cubeRotation',
                rotation => new THREE.Euler(
                    (rotation.x + 0.01) % (2 * Math.PI),
                    (rotation.y + 0.01) % (2 * Math.PI),
                    0
                )
            );
        default:
            return state;
    }
};

export default viewReducer;
