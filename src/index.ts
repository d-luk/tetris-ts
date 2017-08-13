import loadPlayerScore from './components/player-score';
import { pointEquals } from './interfaces/point';
import { ISize } from './interfaces/size';
import Board from './models/board';
import { getPanel } from './models/panel';
import Player from './models/player';
import clearPanel from './services/clear-panel';
import drawGrid from './services/draw-grid';
import drawMatrix from './services/draw-matrix';
import { mergeMatrixes } from './services/matrix-calculations';
import { addScore, resetScore } from './services/player-score';
import settings from './settings';
import './vendor/modernizr.min.js';

// Read context size
const el = document.getElementById('game') as HTMLCanvasElement;

const ctxSize: ISize = {
    width: el.offsetWidth,
    height: el.offsetHeight
};

// Fix scaling for small viewports
const scale = devicePixelRatio || 1;

const viewSize: ISize = {
    width: parseInt(el.getAttribute('width') as string, 10) * scale,
    height: parseInt(el.getAttribute('height') as string, 10) * scale
};

if (viewSize.width !== ctxSize.width) {
    el.setAttribute('width', `${ctxSize.width}`);
}

if (viewSize.height !== ctxSize.height) {
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
let softDropPoints = 0;

// Update loop
function update(): void {
    const newPos = {
        x: player.position.x,
        y: player.position.y + 1
    };

    if (!board.collides(player.shape.blocks, newPos)) {
        player.position = newPos;
    } else {
        // Colliding
        board.place(player.shape, player.position);
        const linesCleared = board.clearFullLines();

        // Add points for cleared lines
        if (linesCleared) {
            const scoring = settings.points.linesCleared as { [lines: number]: number };
            addScore(scoring[linesCleared]);
        }

        // Reset player
        player.reset();
        softDropPoints = 0;

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

// Call update every s seconds
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
    resetScore();
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

            // Add points to score
            const sdPoints = settings.points.softDrop;
            softDropPoints += sdPoints;
            if (softDropPoints < settings.points.softDropMax) {
                addScore(sdPoints);
            }

            break;
        case 'ArrowLeft':
            // Move left
            newPosition.x--;
            break;
        case 'Space':
            // Hard drop
            let nextPos = newPosition;
            let hdPoints = 0;

            do {
                nextPos = { x: nextPos.x, y: nextPos.y + 1 };
                hdPoints += settings.points.hardDrop;
            } while (!board.collides(player.shape.blocks, nextPos));

            newPosition = { x: nextPos.x, y: nextPos.y - 1 };
            addScore(Math.min(
                hdPoints - settings.points.hardDrop,
                settings.points.hardDropMax));

            break;
        default:
            triggered = false;
            break;
    }

    const posChanged = !pointEquals(player.position, newPosition);

    if (posChanged) {
        if (!board.collides(player.shape.blocks, newPosition)) {
            player.position = newPosition;
        } else initInterval();
    }

    if (triggered) {
        e.preventDefault();
        draw();
    }
});

// Load components
loadPlayerScore();
