export const getCommunity = (state, id) => state.getIn(
    ['world', 'communities', id]
).toObject();
