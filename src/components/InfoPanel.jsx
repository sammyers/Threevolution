import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommunityPanel from './CommunityPanel';

import { getRegionType, getFitness } from '../selectors';

class InfoPanel extends Component {
    render() {
        return (
            <div className="info">
            <div className="heading">Most Successful Communities</div>
                <div className="communities">
                    {this.props.bestCommunities.map((community, id) =>
                        <CommunityPanel key={community.get('id')} {...community.toJS()}/>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    bestCommunities: state.getIn(['world', 'communities']).map(
        (community, id) => community.set('id', id)
            .set('fitness', getFitness(state, id))
            .set('regionType', getRegionType(state, community.get('regionId')))
    ).toList()
        .sortBy(community => community.get('fitness'))
        .reverse()
        .slice(0, 5)
});

export default connect(mapStateToProps)
(InfoPanel)
