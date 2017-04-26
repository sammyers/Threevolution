export const WORLD_HEIGHT = 0.5;
export const MUTATION_PROBABILITY = 0.01;

export const traitTypes = {
    foraging: ['coast', 'forest'],
    longneck: ['forest', 'swamp'],
    hibernation: ['mountains', 'forest'],
    scavenging: ['plains', 'coast'],
    herding: ['plains', 'forest'],
    flying: ['mountains', 'plains'],
    hunting: ['swamp', 'plains'],
    swimming: ['coast', 'swamp'],
    rockscrambling: ['mountains', 'coast'],
    fertility: ['swamp', 'mountains']
};

export const regionTypes = {
    forest: {
        color: 0x6b8e23,
        height: 1.4
    },
    plains: {
        color: 0xdaa520,
        height: 1.0
    },
    coast: {
        color: 0xf5deb3,
        height: 0.8
    },
    swamp: {
        color: 0x2f4f4f,
        height: 1.2
    },
    mountains: {
        color: 0xa0522d,
        height: 1.8
    },
    water: {
        color: 0x4682b4,
        height: 0.5
    }
};
