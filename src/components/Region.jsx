import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as THREE from 'three';

import Community from './Community';

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
            </group>
        );
    }
}

export default class Region extends Component {
    render() {
        const { center, cubeRotation, height, communities } = this.props;
        return (
            <group>
                <RegionTile {...this.props}/>
                {communities.map((id, index, iter) => 
                    <Community
                        key={id}
                        id={id}
                        center={center}
                        worldHeight={height}
                        cubeRotation={cubeRotation}
                    />
                )}
            </group>
        );
    }
}
