import settings from '../settings';
import gameOver from './game-over';
import { getUnstuckPosition } from './matrix-calculations';
import { addScore } from './player-score';
import { board, panel, player } from './storage';
import Timer from './timer';
import getViewMatrix from './view-matrix';

export function placePiece(): void {
    board.place(player.shape, player.position);
    const linesCleared = board.clearFullLines();

    // Add points for cleared lines
    if (linesCleared) {
        const scoring = settings.points.linesCleared as { [lines: number]: number };
        addScore(scoring[linesCleared]);
    }

    player.reset();

    // Detect immediate collision
    const matrix = {
        matrix: player.shape.blocks,
        position: player.position
    };

    if (board.collides(matrix)) {
        // Try to reposition
        const unstuckPos = getUnstuckPosition(matrix, board.collides.bind(board));
        if (unstuckPos) player.position = unstuckPos;
        else gameOver();
    }
}

const lockTimeout = new Timer(placePiece, settings.placementTimeout * 1000, false);

export function stopLockTimeout(): void {
    lockTimeout.stop();
}

function update(): void {
    const newPos = {
        x: player.position.x,
        y: player.position.y + 1
    };

    if (!board.collides({ matrix: player.shape.blocks, position: newPos })) {
        // Move piece down
        player.position = newPos;
    } else {
        // Colliding, init placement
        lockTimeout.start();
    }

    panel.draw(getViewMatrix());
}

// Call update immediately
let interval: number;
let currentSeconds: number;

export function setLoopSpeed(seconds: number): void {
    currentSeconds = seconds;

    stopLoop();
    update();
    interval = window.setInterval(() => {
        if (!lockTimeout.running) update();
    }, seconds * 1000);
}

export function startLoop(): void {
    setLoopSpeed(currentSeconds);
}

export function stopLoop(): void {
    window.clearInterval(interval);

}
