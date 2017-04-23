export default [
    {
        id: 0,
        borders: [1, 7],
        corner: {
            x: -75.0,
            y: 50.0
        },
        width: 20.0,
        length: 15.0,
        type: 'water'
    },
    {
        id: 1,
        borders: [0, 2, 7, 8, 9],
        corner: {
            x: -55.0,
            y: 50.0
        },
        width: 25.0,
        length: 30.0,
        type: 'coast'
    },
    {
        id: 2,
        borders: [1, 3, 9, 10],
        corner: {
            x: -30.0,
            y: 50.0
        },
        width: 10.0,
        length: 20.0,
        type: 'swamp'
    },
    {
        id: 3,
        borders: [2, 4, 10, 11],
        corner: {
            x: -20.0,
            y: 50.0
        },
        width: 30.0,
        length: 15.0,
        type: 'forest'
    },
    {
        id: 4,
        borders: [3, 5, 11, 12, 13, 14],
        corner: {
            x: 10.0,
            y: 50.0
        },
        width: 20.0,
        length: 25.0,
        type: 'plains'
    },
    {
        id: 5,
        borders: [4, 6, 14],
        corner: {
            x: 30.0,
            y: 50.0
        },
        width: 20.0,
        length: 15.0,
        type: 'coast'
    },
    {
        id: 6,
        borders: [5, 14, 15, 16],
        corner: {
            x: 50.0,
            y: 50.0
        },
        width: 25.0,
        length: 35.0,
        type: 'water'
    },

    {
        id: 7,
        borders: [0, 1, 17, 18],
        corner: {
            x: -75.0,
            y: 35.0
        },
        width: 20.0,
        length: 15.0,
        type: 'coast'
    },
    {
        id: 8,
        borders: [1, 9, 10, 11, 18, 19, 20],
        corner: {
            x: -55.0,
            y: 20.0
        },
        width: 50.0,
        length: 5.0,
        type: 'forest'
    },
    {
        id: 9,
        borders: [1, 2, 8, 10],
        corner: {
            x: -30.0,
            y: 30.0
        },
        width: 10.0,
        length: 10.0,
        type: 'plains'
    },
    {
        id: 10,
        borders: [2, 3, 8, 9, 11],
        corner: {
            x: -20.0,
            y: 35.0
        },
        width: 15.0,
        length: 15.0,
        type: 'mountains'
    },
    {
        id: 11,
        borders: [3, 4, 8, 10, 12, 20, 21],
        corner: {
            x: -5.0,
            y: 35.0
        },
        width: 15.0,
        length: 25.0,
        type: 'swamp'
    },
    {
        id: 12,
        borders: [4, 11, 13, 21, 22],
        corner: {
            x: 10.0,
            y: 25.0
        },
        width: 15.0,
        length: 20.0,
        type: 'forest'
    },
    {
        id: 13,
        borders: [4, 12, 14, 22, 23, 24, 25],
        corner: {
            x: 25.0,
            y: 25.0
        },
        width: 5.0,
        length: 40.0,
        type: 'mountains'
    },
    {
        id: 14,
        borders: [4, 5, 6, 13, 15, 25, 26],
        corner: {
            x: 30.0,
            y: 35.0
        },
        width: 20.0,
        length: 35.0,
        type: 'coast'
    },
    {
        id: 15,
        borders: [6, 14, 16, 26, 27],
        corner: {
            x: 50.0,
            y: 15.0
        },
        width: 15.0,
        length: 25.0,
        type: 'coast'
    },
    {
        id: 16,
        borders: [6, 15, 27, 28],
        corner: {
            x: 65.0,
            y: 15.0
        },
        width: 10.0,
        length: 35.0,
        type: 'water'
    },

    {
        id: 17,
        borders: [7, 18, 29, 30],
        corner: {
            x: -75.0,
            y: 20.0
        },
        width: 10.0,
        length: 30.0,
        type: 'coast'
    },
    {
        id: 18,
        borders: [7, 8, 17, 19, 30, 31],
        corner: {
            x: -65.0,
            y: 20.0
        },
        width: 10.0,
        length: 10.0,
        type: 'swamp'
    },
    {
        id: 19,
        borders: [8, 18, 20, 31, 32, 33],
        corner: {
            x: -55.0,
            y: 15.0
        },
        width: 25.0,
        length: 25.0,
        type: 'plains'
    },
    {
        id: 20,
        borders: [8, 11, 19, 21, 22, 33, 34],
        corner: {
            x: -30.0,
            y: 15.0
        },
        width: 25.0,
        length: 15.0,
        type: 'mountains'
    },
    {
        id: 21,
        borders: [11, 12, 20, 22],
        corner: {
            x: -5.0,
            y: 10.0
        },
        width: 15.0,
        length: 5.0,
        type: 'plains'
    },
    {
        id: 22,
        borders: [12, 13, 20, 21, 23, 34, 35],
        corner: {
            x: -5.0,
            y: 5.0
        },
        width: 30.0,
        length: 10.0,
        type: 'swamp'
    },
    {
        id: 23,
        borders: [13, 22, 24, 35],
        corner: {
            x: 10.0,
            y: -5.0
        },
        width: 15.0,
        length: 10.0,
        type: 'plains'
    },
    {
        id: 24,
        borders: [13, 23, 25, 27, 35, 36, 37, 38, 45],
        corner: {
            x: 10.0,
            y: -15.0
        },
        width: 30.0,
        length: 25.0,
        type: 'forest'
    },
    {
        id: 25,
        borders: [13, 14, 24, 26, 27],
        corner: {
            x: 30.0,
            y: 0.0
        },
        width: 10.0,
        length: 15.0,
        type: 'swamp'
    },
    {
        id: 26,
        borders: [14, 15, 25, 27],
        corner: {
            x: 40.0,
            y: 0.0
        },
        width: 10.0,
        length: 10.0,
        type: 'forest'
    },
    {
        id: 27,
        borders: [15, 16, 24, 25, 26, 28, 37],
        corner: {
            x: 40.0,
            y: -10.0
        },
        width: 25.0,
        length: 10.0,
        type: 'coast'
    },
    {
        id: 28,
        borders: [16, 27, 37, 38, 39],
        corner: {
            x: 50.0,
            y: -20.0
        },
        width: 25.0,
        length: 20.0,
        type: 'coast'
    },

    {
        id: 29,
        borders: [17, 30, 31, 40],
        corner: {
            x: -75.0,
            y: -10.0
        },
        width: 15.0,
        length: 25.0,
        type: 'water'
    },
    {
        id: 30,
        borders: [17, 18, 29, 31],
        corner: {
            x: -65.0,
            y: 10.0
        },
        width: 5.0,
        length: 20.0,
        type: 'coast'
    },
    {
        id: 31,
        borders: [18, 19, 29, 30, 32, 40, 41],
        corner: {
            x: -60.0,
            y: 10.0
        },
        width: 5.0,
        length: 45.0,
        type: 'coast'
    },
    {
        id: 32,
        borders: [19, 31, 33, 41, 42, 43],
        corner: {
            x: -55.0,
            y: -10.0
        },
        width: 25.0,
        length: 15.0,
        type: 'swamp'
    },
    {
        id: 33,
        borders: [19, 20, 32, 34, 43],
        corner: {
            x: -30.0,
            y: 0.0
        },
        width: 15.0,
        length: 20.0,
        type: 'forest'
    },
    {
        id: 34,
        borders: [20, 22, 33, 35, 43, 44],
        corner: {
            x: -15.0,
            y: 0.0
        },
        width: 10.0,
        length: 25.0,
        type: 'plains'
    },
    {
        id: 35,
        borders: [22, 23, 24, 34, 45],
        corner: {
            x: -5.0,
            y: -5.0
        },
        width: 15.0,
        length: 20.0,
        type: 'mountains'
    },
    {
        id: 36,
        borders: [24, 38, 45],
        corner: {
            x: 10.0,
            y: -40.0
        },
        width: 25.0,
        length: 10.0,
        type: 'mountains'
    },
    {
        id: 37,
        borders: [24, 27, 28, 38],
        corner: {
            x: 40.0,
            y: -20.0
        },
        width: 10.0,
        length: 20.0,
        type: 'mountains'
    },
    {
        id: 38,
        borders: [24, 28, 36, 37, 39],
        corner: {
            x: 35.0,
            y: -40.0
        },
        width: 20.0,
        length: 10.0,
        type: 'swamp'
    },
    {
        id: 39,
        borders: [28, 38],
        corner: {
            x: 55.0,
            y: -40.0
        },
        width: 20.0,
        length: 10.0,
        type: 'forest'
    },

    {
        id: 40,
        borders: [29, 31, 41],
        corner: {
            x: -75.0,
            y: -35.0
        },
        width: 20.0,
        length: 15.0,
        type: 'water'
    },
    {
        id: 41,
        borders: [31, 32, 40, 42, 46],
        corner: {
            x: -55.0,
            y: -25.0
        },
        width: 20.0,
        length: 25.0,
        type: 'coast'
    },
    {
        id: 42,
        borders: [32, 41, 43, 46],
        corner: {
            x: -35.0,
            y: -25.0
        },
        width: 5.0,
        length: 10.0,
        type: 'forest'
    },
    {
        id: 43,
        borders: [32, 33, 34, 42, 44, 46],
        corner: {
            x: -30.0,
            y: -20.0
        },
        width: 15.0,
        length: 15.0,
        type: 'mountains'
    },
    {
        id: 44,
        borders: [34, 43, 45, 46],
        corner: {
            x: -15.0,
            y: -25.0
        },
        width: 10.0,
        length: 10.0,
        type: 'forest'
    },
    {
        id: 45,
        borders: [24, 35, 36, 44, 46],
        corner: {
            x: -5.0,
            y: -25.0
        },
        width: 15.0,
        length: 25.0,
        type: 'plains'
    },

    {
        id: 46,
        borders: [41, 42, 43, 44, 45],
        corner: {
            x: -35.0,
            y: -35.0
        },
        width: 30.0,
        length: 15.0,
        type: 'swamp'
    }
]
