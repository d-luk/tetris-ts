import { pointEquals } from './interfaces/point';
import { ISize } from './interfaces/size';
import Board from './models/board';
import { getPanel } from './models/panel';
import Player from './models/player';
import clearPanel from './services/clear-panel';
import drawGrid from './services/draw-grid';
import drawMatrix from './services/draw-matrix';
import { mergeMatrixes } from './services/matrix-calculations';

// Read context size
const el = document.getElementById('game') as HTMLCanvasElement;

const ctxSize: ISize = {
    width: el.offsetWidth,
    height: el.offsetHeight
};

// Fix scaling for small viewports
const attributeSize: ISize = {
    width: parseInt(el.getAttribute('width') as string, 10),
    height: parseInt(el.getAttribute('height') as string, 10)
};

if (attributeSize.width !== ctxSize.width) {
    el.setAttribute('width', `${ctxSize.width}`);
}

if (attributeSize.height !== ctxSize.height) {
    el.setAttribute('height', `${ctxSize.height}`);
}

// Declare tile count on board
const boardSize: ISize = {
    width: 16,
    height: 24
};

// Create panel
const panel = getPanel('game', ctxSize);
const board = new Board(boardSize);

// Place a random shape
const player = new Player({ x: 7, y: 0 });
let firstFall = true;

// Update loop
function update(): void {
    const newPos = {
        x: player.position.x,
        y: player.position.y + 1
    };

    const colliding = board.collides(player.shape.blocks, newPos);

    if (firstFall && colliding) {
        gameOver();
    } else if (!colliding) {
        firstFall = false;
        player.position = newPos;
    } else {
        // Colliding on non-first fall
        board.place(player.shape, player.position);

        // Reset player
        player.reset();
        firstFall = true;

        // Detect immediate collision
        if (board.collides(player.shape.blocks, player.position)) {
            gameOver();
        }
    }

    draw();
}

function draw(): void {
    const viewMatrix = mergeMatrixes(board.blocks, player.shape.blocks, player.position);

    clearPanel(panel);
    drawGrid(panel, boardSize);
    drawMatrix(panel, viewMatrix);
}

// Call update and keep calling it every s seconds
let interval: number;
const s = 0.5;
function initInterval(): void {
    window.clearInterval(interval);
    update();
    interval = window.setInterval(update, s * 1000);
}
initInterval();

// Game over handling
function gameOver(): void {
    board.clear();
    player.reset();
    firstFall = true;
}

// Key handling
document.addEventListener('keydown', e => {

    let newPosition = {
        x: player.position.x,
        y: player.position.y
    };

    let triggered = true;
    switch (e.code) {
        case 'ArrowUp':
            // Rotate clockwise
            if (e.repeat) return;
            player.shape.rotate();

            // Push shape back on to the board
            if (!board.contains(player.shape.blocks, newPosition)) {
                newPosition = player.getContainedPosition(board);
            }

            break;
        case 'ArrowRight':
            // Move right
            newPosition.x++;
            break;
        case 'ArrowDown':
            // Soft drop
            newPosition.y++;
            break;
        case 'ArrowLeft':
            // Move left
            newPosition.x--;
            break;
        case 'Space':
            // Hard drop
            let nextPos = newPosition;
            do {
                nextPos = { x: nextPos.x, y: nextPos.y + 1 };
            } while (board.contains(player.shape.blocks, nextPos));

            newPosition = { x: nextPos.x, y: nextPos.y - 1 };
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
