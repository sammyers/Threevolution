export const rotateCube = () => ({ type: 'ROTATE_CUBE' });

export const mutatePopulation = (id, mutations) => ({
    type: 'MUTATE_POPULATION',
    mutations
});
