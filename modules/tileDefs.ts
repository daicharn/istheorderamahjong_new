//牌を数値として定義
export const TILE = {
    MANZU: [1,2,3,4,5,6,7,8,9],
    PINZU: [10,11,12,13,14,15,16,17,18],
    SOUZU: [19,20,21,22,23,24,25,26,27],
    JIHAI: [28,29,30,31,32,33,34],

    WIND: {
        EAST: { id: 28, name: "東" },
        SOUTH: { id: 29, name: "南" },
        WEST: { id: 30, name: "西" },
        NORTH: { id: 31, name: "北" }
    },
    DRAGON: {
        WHITE: { id: 32, name: "白" },
        GREEN: { id: 33, name: "發" },
        RED: { id: 34, name: "中" }
    },

    BACK: 100,
} as const;

export type Wind = typeof TILE.WIND[keyof typeof TILE.WIND];
export type Dragon = typeof TILE.DRAGON[keyof typeof TILE.DRAGON];