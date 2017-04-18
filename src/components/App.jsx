import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import { connect } from 'react-redux';

import { rotateCube } from '../actions';

class App extends Component {
    render() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const {
            cameraPosition, cubeRotation,
            lightPosition, lightLookAt,
            rotateCube
        } = this.props;

        return (
            <React3
                mainCamera="camera"
                width={width}
                height={height}
                onAnimate={() => rotateCube()}
            >
                <scene>
                    <perspectiveCamera
                        name="camera"
                        fov={75}
                        aspect={width / height}
                        near={0.1}
                        far={1000}
                        position={cameraPosition}
                    />
                    <mesh
                        rotation={cubeRotation}
                        receiveShadow={true}
                    >
                        <boxGeometry
                            width={1}
                            height={1}
                            depth={1}
                        />
                        <meshPhongMaterial/>
                    </mesh>
                    <ambientLight intensity={0.2}/>
                    <directionalLight
                        color={0xffffff}
                        position={lightPosition}
                        lookAt={lightLookAt}
                        intensity={1.0}
                        castShadow={true}
                    />
                </scene>
            </React3>
        );
    }
}

const mapStateToProps = state => state.toObject();

const mapDispatchToProps = dispatch => ({
    rotateCube: () => dispatch(rotateCube())
});

export default connect(mapStateToProps, mapDispatchToProps)
(App)
