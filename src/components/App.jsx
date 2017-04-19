import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ThreeOrbitControls from 'three-orbit-controls';
import { connect } from 'react-redux';

import { rotateCube } from '../actions';
import { WORLD_HEIGHT } from '../constants';

const OrbitControls = ThreeOrbitControls(THREE);

const position = new THREE.Vector3(0, -0.25, 0);
const cubePosition = new THREE.Vector3(0, 0.5, 0);

class RegionTile extends Component {
    render() {
        const { center, width, length, color } = this.props;

        return (
            <mesh
                position={center}
                receiveShadow={true}
            >
                <boxGeometry
                    width={width}
                    height={WORLD_HEIGHT}
                    depth={length}
                />
                <meshPhongMaterial color={color}/>
            </mesh>
        );
    }
}

class App extends Component {
    componentDidMount() {
        this.controls = new OrbitControls(this.refs.camera);
    }

    render() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const {
            cameraPosition, cameraLookAt, cubeRotation,
            lightPosition, lightLookAt,
            rotateCube,
            world
        } = this.props;

        return (
            <React3
                mainCamera="camera"
                width={width}
                height={height}
                clearColor={0xffffff}
                clearAlpha={0.5}
                onAnimate={() => rotateCube()}
            >
                <scene>
                    <perspectiveCamera
                        name="camera"
                        ref="camera"
                        fov={75}
                        aspect={width / height}
                        near={0.1}
                        far={1000}
                        position={cameraPosition}
                        lookAt={cameraLookAt}
                    />
                    <mesh
                        position={cubePosition}
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
                    {world.map((tile, index) =>
                        <RegionTile key={index} {...tile.toObject()}/>
                    )}
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
