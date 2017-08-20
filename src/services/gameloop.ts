import settings from '../settings';
import gameOver from './game-over';
import { addScore } from './player-score';
import { board, panel, player } from './storage';
import getViewMatrix from './view-matrix';

function update(): void {
    const newPos = {
        x: player.position.x,
        y: player.position.y + 1
    };

    if (!board.collides({ matrix: player.shape.blocks, position: newPos })) {
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
        player.softDropPoints = 0;

        // Detect immediate collision
        if (board.collides({
            matrix: player.shape.blocks,
            position: player.position
        })) {
            gameOver();
        }
    }

    panel.draw(getViewMatrix());
}

// Call update immediately
let interval: number;
let currentSeconds: number;
export function setLoopSpeed(seconds: number): void {
    currentSeconds = seconds;

    window.clearInterval(interval);
    update();
    interval = window.setInterval(update, seconds * 1000);
}

export function activateLoop(): void {
    setLoopSpeed(currentSeconds);
}
