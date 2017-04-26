import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Scene extends Component {
    getChildContext() {
        return { store: this.props.store };
    }

    render() {
        return (
            <scene>
                {this.props.children}
            </scene>
        );
    }
}

Scene.childContextTypes = {
    store: PropTypes.shape({
        subscribe: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired
    })
};
