import { ISize } from './interfaces/size';
import Board from './models/board';
import { getPanel } from './models/panel';
import clearPanel from './services/clear-panel';
import drawGrid from './services/draw-grid';
import drawMatrix from './services/draw-matrix';
import getRandomShape from './services/random-shape';

// Define sizes
const ctxSize: ISize = { width: 400, height: 600 };
const tileSize = 20;
const boardSize: ISize = {
    width: ctxSize.width / tileSize,
    height: ctxSize.height / tileSize
};

// Create panel
const panel = getPanel('game', ctxSize);
const board = new Board(boardSize);

// Place a random shape
const shape = getRandomShape();

// Draw loop
function draw(): void {
    // TODO: Only draw changes
    shape.rotate(true);
    board.clear();
    board.place(shape, { x: 9, y: 10 });

    clearPanel(panel);
    drawGrid(panel, boardSize);
    drawMatrix(panel, board.blocks, tileSize);
}

draw();
window.setInterval(draw, 1000);
