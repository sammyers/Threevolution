import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as THREE from 'three';

export default class PopulationUnit extends Component {
    render() {
        const { center, cubeRotation } = this.props;

        return (
            <mesh
                position={new THREE.Vector3(center.x, 1, center.z)}
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
        );
    }
}

class Population extends Component {
    render() {
        return (
            <div className="population"></div>
        );
    }
}

// const mapStateToProps = state => ({
//     cubeRotation: state.get('cubeRotation')
// });

// export default connect(mapStateToProps)
// (PopulationUnit)
