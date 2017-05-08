import { calculateAdaptationScore } from '../helpers';

export const getCommunity = (state, communityId) => state.getIn(
    ['world', 'communities', communityId]
);

const getPopulation = (state, communityId) => {
    return getCommunity(state, communityId).get('population');
};

export const getCommunities = (state, regionId) => state.getIn(
    ['world', 'regions', regionId, 'communities']
).map(id => state.getIn(['world', 'communities', id]));

export const getTraits = (state, communityId) => state.getIn(
    ['world', 'communities', communityId, 'traits']
);

export const getBorders = (state, regionId) => state.getIn(
    ['world', 'regions', regionId, 'borders']
);

export const getContainingRegion = (state, communityId) => state.getIn(
    ['world', 'communities', communityId, 'regionId']
);

export const getNeighboringRegions = (state, communityId) => {
    const currentRegion = getContainingRegion(state, communityId);
    return getBorders(state, currentRegion);
};

const getRegion = (state, regionId) => state.getIn(
    ['world', 'regions', regionId]
);

export const getRegionType = (state, regionId) => state.getIn(
    ['world', 'regions', regionId, 'type']
);

const getCarryingCapacity = (state, regionId) => {
    const region = getRegion(state, regionId);
    return region.get('width') * region.get('length') / 25;
};

const getTotalPopulation = (state, regionId) => {
    return getCommunities(state, regionId).reduce(
        (total, community) => total += community.get('population'),
        0
    );
};

export const getFreeSpace = (state, regionId) => {
    return getCarryingCapacity(state, regionId) - getTotalPopulation(state, regionId);
};

const getAdaptationScore = (state, regionId, communityId) => {
    const fitness = calculateAdaptationScore(
        getTraits(state, communityId),
        getRegionType(state, regionId)
    );
    const freeSpace = getFreeSpace(state, regionId);
    return fitness;// + freeSpace;
};

export const getFitness = (state, communityId) => {
    const regionId = getContainingRegion(state, communityId);
    return getAdaptationScore(state, regionId, communityId);
};

const getBestOtherRegion = (state, communityId) => {
    const otherRegions = getNeighboringRegions(state, communityId)
        .sortBy(() => Math.random()); //Shuffle to randomize in case of a tie
    const scores = otherRegions.map(regionId => {
        return getAdaptationScore(state, regionId, communityId);
    });
    const maxScore = scores.max();
    return [otherRegions.get(scores.indexOf(maxScore)), maxScore];
}

export const getBestRegion = (state, communityId) => {
    const currentRegion = getContainingRegion(state, communityId);
    const currentRegionScore = getAdaptationScore(state, currentRegion, communityId);
    const [bestOtherRegion, maxScore] = getBestOtherRegion(state, communityId);
    if (maxScore > currentRegionScore) {
        return bestOtherRegion;
    } else {
        return currentRegion;
    }
};

export const getRenderHeight = (state, communityId) => {
    const regionId = state.getIn(['world', 'communities', communityId, 'regionId']);
    const communities = state.getIn(['world', 'regions', regionId, 'communities']);
    const prevCommunities = communities.slice(0, communities.indexOf(communityId));
    const height = prevCommunities.reduce(
        (total, community) => total + getPopulation(state, community),
        0
    );
    return height + (prevCommunities.size - 1) * 0.2;
};
