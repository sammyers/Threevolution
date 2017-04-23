import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as THREE from 'three';

import PopulationUnit from './Population';

import helvetikerFont from '../helvetiker_regular.typeface.json';

let font = new THREE.Font(helvetikerFont);

class RegionTile extends Component {
    render() {
        const { center, width, length, height, color, id } = this.props;

        return (
            <group>
                <mesh
                    position={center}
                    receiveShadow={true}
                >
                    <boxGeometry
                        width={width}
                        height={height}
                        depth={length}
                    />
                    <meshPhongMaterial color={color}/>
                </mesh>
                {/*<mesh
                    position={new THREE.Vector3(center.x - 1, height, center.z)}
                >
                    <textGeometry
                        text={id.toString()}
                        size={2}
                        font={font}
                        height={1}
                    >
                    </textGeometry>
                    <meshPhongMaterial/>
                </mesh>*/}
            </group>
        );
    }
}

export default class Region extends Component {
    render() {
        const { center, cubeRotation, height } = this.props;
        return (
            <group>
                <RegionTile {...this.props}/>
                {/*<PopulationUnit
                    center={center}
                    height={height}
                    cubeRotation={cubeRotation}/>*/}
            </group>
        );
    }
}
