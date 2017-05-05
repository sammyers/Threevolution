export const WORLD_HEIGHT = 0.5;
export const MUTATION_PROBABILITY = 0.01;

export const INFO_PANEL_HEIGHT = 0;

export const traitTypes = {
    foraging: {
        'coast': 1,
        'forest': 1,
        'plains': 0,
        'swamp': -1,
        'mountains': -1,
        'water': -4
    },
    longneck: {
        'forest': 1,
        'swamp': 1,
        'mountains': 0,
        'coast': -2,
        'plains': -1,
        'water': -4
    },
    hibernation: {
        'mountains': 1,
        'forest': 1,
        'coast': 0,
        'plains': -1,
        'swamp': -1,
        'water': -4
    },
    scavenging: {
        'plains': 1,
        'coast': 1,
        'mountains': 0,
        'forest': -1,
        'swamp': -1,
        'water': -4
    },
    herding: {
        'plains': 1,
        'forest': 1,
        'swamp': 0,
        'coast': -2,
        'mountains': -1,
        'water': -4
    },
    flying: {
        'mountains': 1,
        'plains': 1,
        'forest': 0,
        'coast': -2,
        'swamp': -1,
        'water': -4
    },
    hunting: {
        'swamp': 1,
        'plains': 1,
        'coast': 0,
        'mountains': -1,
        'forest': -1,
        'water': -4
    },
    swimming: {
        'coast': 1,
        'swamp': 1,
        'forest': 0,
        'mountains': -1,
        'plains': -1,
        'water': 2
    },
    rockscrambling: {
        'mountains': 1,
        'coast': 1,
        'swamp': 0,
        'plains': -1,
        'forest': -1,
        'water': -4
    },
    fertility: {
        'swamp': 1,
        'mountains': 1,
        'plains': 0,
        'forest': -1,
        'coast': -2,
        'water': -4
    }
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
