import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as THREE from 'three';

import PopulationUnit from './Population';

class RegionTile extends Component {
    render() {
        const { center, width, length, height, color } = this.props;

        return (
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
        );
    }
}

export default class Region extends Component {
    render() {
        const { center, cubeRotation } = this.props;
        return (
            <group>
                <RegionTile {...this.props}/>
                <PopulationUnit center={center} cubeRotation={cubeRotation}/>
            </group>
        );
    }
}
