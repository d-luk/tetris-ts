const settings = {
    drawEmptyTiles: false,
    points: {
        // Amount of lines cleared at once
        linesCleared: {
            1: 40,
            2: 100,
            3: 300,
            4: 1200
        },

        // Points per cell dropped
        softDrop: 1,
        hardDrop: 2,

        // Max drop points per turn
        softDropMax: 20,
        hardDropMax: 40
    }
};

export default settings;
