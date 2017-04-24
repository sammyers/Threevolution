import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as THREE from 'three';

export default class Community extends Component {
    render() {
        const { center, height } = this.props;

        return (
            <mesh
                position={new THREE.Vector3(center.x, height + 1, center.z)}
            >
                <sphereGeometry radius={1}/>
                <meshPhongMaterial/>
            </mesh>
        );
    }
}

// const mapStateToProps = state => ({
//     cubeRotation: state.get('cubeRotation')
// });

// export default connect(mapStateToProps)
// (PopulationUnit)
