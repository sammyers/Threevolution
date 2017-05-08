import React, { Component } from 'react';

import Traits from './Traits';

export default class CommunityPanel extends Component {
    render() {
        const { color, population, traits, regionType, fitness } = this.props;

        return (
            <div className="community-panel">
                <div className="community-heading">
                    <div className="swatch"
                        style={{ background: '#' + color.toString(16) }}
                    />
                    <div className="region">{regionType.charAt(0).toUpperCase() + regionType.slice(1)}</div>
                </div>
                <div className="population">{`Fitness: ${fitness}`}</div>
                <div className="population">{`Population: ${population}`}</div>
                <Traits list={traits}/>
            </div>
        );
    }
}
