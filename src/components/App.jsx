import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ThreeOrbitControls from 'three-orbit-controls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Scene from './Scene';
import Region from './Region';

import { rotateCube, processMutations, moveCommunities } from '../actions';
import { WORLD_HEIGHT } from '../constants';
import { createInitialCommunities } from '../helpers';

const OrbitControls = ThreeOrbitControls(THREE);

const position = new THREE.Vector3(0, -0.25, 0);

class App extends Component {
    componentDidMount() {
        this.controls = new OrbitControls(this.refs.camera);
        const {
            communities,
            initializeCommunities, processMutations, moveCommunities
        } = this.props;
        initializeCommunities();

        this.mutate = setInterval(() => {
            processMutations();
            moveCommunities();
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.mutate);
    }

    render() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const {
            view: {
                cameraPosition, cameraLookAt, cubeRotation,
                lightPosition, lightLookAt
            },
            rotateCube,
            regions
        } = this.props;

        return (
            <React3
                mainCamera="camera"
                width={width}
                height={height}
                clearColor={0xf0f0f0}
                // onAnimate={() => rotateCube()}
            >
                <Scene store={this.context.store}>
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
                    {regions.map((tile, index) =>
                        <Region key={index} cubeRotation={cubeRotation} {...tile}/>
                    )}
                    <ambientLight intensity={0.2}/>
                    <directionalLight
                        color={0xffffff}
                        position={lightPosition}
                        lookAt={lightLookAt}
                        intensity={1.0}
                        castShadow={true}
                    />
                </Scene>
            </React3>
        );
    }
}

App.contextTypes = {
    store: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    regions: state.getIn(['world', 'regions']).toList().toJS(),
    communities: state.getIn(['world', 'communities']),
    view: state.get('view').toObject()
});

const mapDispatchToProps = dispatch => ({
    rotateCube: () => dispatch(rotateCube()),
    initializeCommunities: () => dispatch(createInitialCommunities()),
    processMutations: () => dispatch(processMutations()),
    moveCommunities: () => dispatch(moveCommunities())
});

export default connect(mapStateToProps, mapDispatchToProps)
(App)
