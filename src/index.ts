import IPoint from './interfaces/point';
import { ISize } from './interfaces/size';
import Board from './models/board';
import { getPanel } from './models/panel';
import Player from './models/player';
import clearPanel from './services/clear-panel';
import drawGrid from './services/draw-grid';
import drawMatrix from './services/draw-matrix';
import { matrixContains, mergeMatrixes } from './services/matrix-calculations';
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
const player = new Player(getRandomShape(), { x: 0, y: 0 });

// Update loop
function update(): void {
    // TODO: Only draw changes
    const newPos: IPoint = { x: player.position.x, y: player.position.y + 1 };
    const hitBorder = !matrixContains(board.blocks, player.shape.blocks, newPos);

    if (!hitBorder) {
        player.position.y++;
    } else {
        // TODO
        player.position.y = 0;
    }

    const viewMatrix = mergeMatrixes(board.blocks, player.shape.blocks, player.position);

    clearPanel(panel);
    drawGrid(panel, boardSize);
    drawMatrix(panel, viewMatrix, tileSize);
}

update();
window.setInterval(update, 500);
