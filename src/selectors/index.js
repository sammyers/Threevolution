import { calculateAdaptationScore } from '../helpers';

export const getCommunity = (state, communityId) => state.getIn(
    ['world', 'communities', communityId]
);

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

const getRegionType = (state, regionId) => state.getIn(
    ['world', 'regions', regionId, 'type']
);

const getCarryingCapacity = (state, regionId) => {
    const region = getRegion(state, regionId);
    return region.get('width') * region.get('length') / 5;
};

const getAdaptationScore = (state, regionId, traits) => calculateAdaptationScore(
    traits,
    getRegionType(state, regionId)
);

const getFitness = (state, communityId) => {
    const regionId = getContainingRegion(state, communityId);
    const traits = getTraits(state, communityId);
    return getAdaptationScore(state, regionId, traits);
};

export const getBestRegion = (state, communityId) => {
    const traits = getTraits(state, communityId);
    const currentRegion = getContainingRegion(state, communityId);
    const otherRegions = getNeighboringRegions(state, communityId)
        .sortBy(() => Math.random()); //Shuffle to randomize in case of a tie
    const currentRegionScore = getAdaptationScore(state, currentRegion, traits);
    const otherScores = otherRegions.map(regionId => {
        return getAdaptationScore(state, regionId, traits);
    });
    const maxScore = otherScores.max();
    if (maxScore > currentRegionScore) {
        return otherRegions.get(otherScores.indexOf(maxScore));
    } else {
        return currentRegion;
    }
};
