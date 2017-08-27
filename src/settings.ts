const settings = {

    // Per drops per second
    gameSpeed: 0.4,

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
    },

    // Seconds to wait before locking piece
    placementTimeout: 0.5,

    debug: {
        // Draw full shape square
        drawEmptyTiles: false,
        emptyTileColor: '#f1f1f1'
    }
};

export default settings;
