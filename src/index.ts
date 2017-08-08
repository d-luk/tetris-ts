import { clonePoint } from './interfaces/point';
import { ISize } from './interfaces/size';
import Board from './models/board';
import { getPanel } from './models/panel';
import Player from './models/player';
import clearPanel from './services/clear-panel';
import drawGrid from './services/draw-grid';
import drawMatrix from './services/draw-matrix';
import { mergeMatrixes } from './services/matrix-calculations';
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
const startingPoint = { x: 9, y: 0 };
const player = new Player(getRandomShape(), clonePoint(startingPoint));

// Update loop
function update(): void {
    // TODO: Only draw changes
    const newPos = {
        x: player.position.x,
        y: player.position.y + 1
    };

    if (board.collides(player.shape.blocks, newPos)) {
        board.place(player.shape, player.position);

        player.shape = getRandomShape();
        player.position = clonePoint(startingPoint);
    } else {
        player.position = newPos;
    }

    draw();
}

function draw(): void {
    const viewMatrix = mergeMatrixes(board.blocks, player.shape.blocks, player.position);

    clearPanel(panel);
    drawGrid(panel, boardSize);
    drawMatrix(panel, viewMatrix, tileSize);
}

update();
window.setInterval(update, 500);

// Key handling
document.addEventListener('keydown', e => {

    let newPosition = {
        x: player.position.x,
        y: player.position.y
    };

    let triggered = true;
    switch (e.code) {
        case 'ArrowUp':
            if (e.repeat) return;
            player.shape.rotate();

            // Push shape back on to the board
            if (!board.contains(player.shape.blocks, newPosition)) {
                newPosition = player.getContainedPosition(board);
            }

            break;
        case 'ArrowRight':
            newPosition.x++;
            break;
        case 'ArrowDown':
            newPosition.y++;
            break;
        case 'ArrowLeft':
            newPosition.x--;
            break;
        default:
            triggered = false;
            break;
    }

    if (triggered) {
        if (!board.collides(player.shape.blocks, newPosition)) {
            player.position = newPosition;
        }

        draw();
    }
});
