import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as THREE from 'three';

import { getCommunity, getRenderHeight } from '../selectors';

class Community extends Component {
    render() {
        const { center, renderHeight, population, color } = this.props;

        return (
            <mesh
                position={new THREE.Vector3(center.x, renderHeight + population, center.z)}
            >
                <sphereGeometry radius={population / 2}/>
                <meshPhongMaterial color={color}/>
            </mesh>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return getCommunity(state, ownProps.id).set(
        'renderHeight',
        ownProps.worldHeight + getRenderHeight(state, ownProps.id)
    ).toObject();
};

export default connect(mapStateToProps)
(Community)
