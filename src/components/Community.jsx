import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as THREE from 'three';

import { getCommunity } from '../selectors';

class Community extends Component {
    render() {
        const { center, height, population } = this.props;

        return (
            <mesh
                position={new THREE.Vector3(center.x, height + population, center.z)}
            >
                <sphereGeometry radius={population}/>
                <meshPhongMaterial/>
            </mesh>
        );
    }
}

const mapStateToProps = (state, ownProps) => getCommunity(state, ownProps.id);

export default connect(mapStateToProps)
(Community)
