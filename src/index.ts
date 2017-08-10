import { pointEquals } from './interfaces/point';
import { ISize } from './interfaces/size';
import Board from './models/board';
import { getPanel } from './models/panel';
import Player from './models/player';
import clearPanel from './services/clear-panel';
import drawGrid from './services/draw-grid';
import drawMatrix from './services/draw-matrix';
import { mergeMatrixes } from './services/matrix-calculations';

// Define sizes
const ctxSize: ISize = { width: 400, height: 600 };
const tileSize = 25;
const boardSize: ISize = {
    width: ctxSize.width / tileSize,
    height: ctxSize.height / tileSize
};

// Create panel
const panel = getPanel('game', ctxSize);
const board = new Board(boardSize);

// Place a random shape
const player = new Player({ x: 7, y: 0 });
let firstFall = true;

// Update loop
function update(): void {
    // TODO: Only draw changes
    const newPos = {
        x: player.position.x,
        y: player.position.y + 1
    };

    const colliding = board.collides(player.shape.blocks, newPos);

    if (firstFall) console.log('First fall');

    if (firstFall && colliding) {
        // Game over
        board.clear();
        player.reset();
    } else if (!colliding) {
        firstFall = false;
        player.position = newPos;
    } else {
        // Colliding on non-first fall
        board.place(player.shape, player.position);
        player.reset();
        firstFall = true;
    }

    draw();
}

function draw(): void {
    const viewMatrix = mergeMatrixes(board.blocks, player.shape.blocks, player.position);

    clearPanel(panel);
    drawGrid(panel, boardSize);
    drawMatrix(panel, viewMatrix, tileSize);
}

// Call update and keep calling it every s seconds
let interval: number;
const s = 1.5;
function initInterval(): void {
    window.clearInterval(interval);
    update();
    interval = window.setInterval(update, s * 1000);
}
initInterval();

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

    const posChanged = !pointEquals(player.position, newPosition);

    if (posChanged) {
        if (!board.collides(player.shape.blocks, newPosition)) {
            player.position = newPosition;
            firstFall = false;
        } else initInterval();
    }

    if (triggered) draw();
});
