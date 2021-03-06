import * as Hammer from 'hammerjs';
import { pointEquals } from '../interfaces/point';
import settings from '../settings';
import { placePiece, stopLockTimeout } from './gameloop';
import { copyMatrix, getUnstuckPosition, matrixEquals } from './matrix-calculations';
import { pauseGame, restartGame } from './pause-game';
import { addScore } from './player-score';
import { board, panel, paused, player } from './storage';
import Timer from './timer';
import UniqueArray from './unique-array';
import getViewMatrix from './view-matrix';

const keysDown = new UniqueArray<string>();

const keyInterval = new Timer(() => {
    keysDown.values.forEach(code => {
        handlePlayerMovement(code, true);
    });
}, 90);

const keyThresholdTimer = new Timer(() => {
    keyInterval.start();
}, 200, false);

export default function handleInput(): void {
    document.addEventListener('keydown', e => {
        if (e.repeat) return;

        const keyCode = e.code;

        if (handlePlayerMovement(keyCode, false)) {
            e.preventDefault();

            keysDown.add(keyCode);

            if (keyCode === 'ArrowLeft' || keyCode === 'ArrowRight') {
                // Make it easier to move one tile
                keyInterval.stop();
                keyThresholdTimer.start();
            } else keyInterval.start();
        }

        // Pause game handling
        if (paused.value) {
            if (keyCode === 'Escape' || keyCode === 'Space') {
                restartGame();
            }
        } else if (keyCode === 'Escape') {
            pauseGame();
        }
    });

    document.addEventListener('keyup', e => {
        if (keysDown.contains(e.code)) {
            keysDown.remove(e.code);

            if (keysDown.count === 0) {
                keyThresholdTimer.stop();
                keyInterval.stop();
            }
        }
    });

    // Touch controls
    if (!Modernizr.touchevents) return;
    const mc = new Hammer.Manager(document.body);
    mc.add(new Hammer.Tap());
    mc.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_DOWN }));
    mc.add(new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 20 }));
    mc.on('tap', () => handlePlayerMovement('ArrowUp', false));
    mc.on('swipedown', () => handlePlayerMovement('Space', false));

    let isFirst = true;
    mc.on('panstart', () => isFirst = true);
    mc.on('panleft', e => {
        movePiece(e.deltaX, isFirst);
        if (isFirst) isFirst = false;
    });
    mc.on('panright', e => {
        movePiece(e.deltaX, isFirst);
        if (isFirst) isFirst = false;
    });
}

let colStart: number;
function movePiece(deltaX: number, reset: boolean): void {

    const canvasWidth = panel.canvas.offsetWidth;
    const tileWidth = canvasWidth / board.size.width;

    if (reset || typeof colStart === 'undefined') {
        colStart = player.position.x - deltaX / tileWidth;
    }

    const newCol = Math.floor(colStart + deltaX / tileWidth);
    if (newCol === colStart) return;

    const deltaCol = player.position.x - newCol;
    if (deltaCol > 0) {
        for (let i = 0; i < deltaCol; i++) {
            handlePlayerMovement('ArrowLeft', false);
        }
    } else {
        for (let i = 0; i > deltaCol; i--) {
            handlePlayerMovement('ArrowRight', false);
        }
    }
}

function handlePlayerMovement(keyCode: string, repeated: boolean): boolean {
    if (paused.value) return false;

    let newPosition = {
        x: player.position.x,
        y: player.position.y
    };

    const beforeMatrix = copyMatrix(player.shape.blocks);

    let triggered = true;
    let hardDropped = false;

    switch (keyCode) {
        case 'ArrowUp':
            // Rotate clockwise
            if (repeated) return true;
            player.shape.rotate();

            const playerMatrix = {
                matrix: player.shape.blocks,
                position: newPosition
            };

            if (board.collides(playerMatrix)) {
                // Colliding with other blocks, try to reposition
                const unstuckPos = getUnstuckPosition(playerMatrix, board.collides.bind(board));

                if (!unstuckPos) {
                    // Cannot unstuck, revert!
                    player.shape.rotate(true);
                } else {
                    // Repositioned
                    newPosition = unstuckPos;
                }
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
            player.softDropPoints += sdPoints;
            if (player.softDropPoints < settings.points.softDropMax) {
                addScore(sdPoints);
            }

            break;
        case 'ArrowLeft':
            // Move left
            newPosition.x--;
            break;
        case 'Space':
            // Hard drop
            if (repeated) return true;

            let nextPos = newPosition;
            let hdPoints = 0;

            do {
                nextPos = { x: nextPos.x, y: nextPos.y + 1 };
                hdPoints += settings.points.hardDrop;
            } while (!board.collides({
                matrix: player.shape.blocks,
                position: nextPos
            }));

            newPosition = { x: nextPos.x, y: nextPos.y - 1 };
            addScore(Math.min(
                hdPoints - settings.points.hardDrop,
                settings.points.hardDropMax));

            hardDropped = true;
            break;
        default:
            triggered = false;
            break;
    }

    let posChanged = !pointEquals(player.position, newPosition);

    if (posChanged || hardDropped) {
        const newMatrix = {
            matrix: player.shape.blocks,
            position: newPosition
        };

        if (!board.collides(newMatrix)) {
            player.position = newPosition;
        } else posChanged = false;

        if (hardDropped
            || keyCode === 'ArrowDown'
            && board.collides(newMatrix)) {
            placePiece();
        }
    }

    const rotationChanged = !matrixEquals(player.shape.blocks, beforeMatrix);

    if (posChanged || rotationChanged) {
        stopLockTimeout();
        panel.draw(getViewMatrix());
    }

    return triggered;
}
