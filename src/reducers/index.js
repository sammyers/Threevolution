import { Map } from 'immutable';
import * as THREE from 'three';

const initialState = Map({
    cameraPosition: new THREE.Vector3(0, 0, 5),
    cubeRotation: new THREE.Euler(),
    lightPosition: new THREE.Vector3(0, 0, 200),
    lightLookAt: new THREE.Vector3(0, 0, 0)
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
