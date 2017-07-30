import { ISize } from './interfaces/size';
import Board from './models/board';
import { getPanel } from './models/panel';
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
board.place(getRandomShape(), { x: 9, y: 1 });
board.place(getRandomShape(), { x: 9, y: 6 });
board.place(getRandomShape(), { x: 9, y: 11 });
board.place(getRandomShape(), { x: 9, y: 16 });

const rotatedShape = getRandomShape();
rotatedShape.rotate();
board.place(rotatedShape, { x: 9, y: 23 });

// Draw the grid
drawGrid(panel, boardSize);
drawMatrix(panel, board.blocks, tileSize);
