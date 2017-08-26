import { pointEquals } from '../interfaces/point';
import settings from '../settings';
import { activateLoop } from './gameloop';
import { matrixesColliding } from './matrix-calculations';
import { addScore } from './player-score';
import { board, panel, player } from './storage';
import Timer from './timer';
import UniqueArray from './unique-array';
import getViewMatrix from './view-matrix';

const keysDown = new UniqueArray<string>();

const keyInterval = new Timer(() => {
    keysDown.values.forEach(code => {
        handleKeyDown(code, true);
    });
}, 90);

const keyThresholdTimer = new Timer(() => {
    keyInterval.start();
}, 200, false);

export default function handleKeys(): void {
    document.addEventListener('keydown', e => {
        if (e.repeat) return;

        const keyCode = e.code;

        if (handleKeyDown(keyCode, false)) {
            e.preventDefault();

            keysDown.add(keyCode);

            if (keyCode === 'ArrowLeft' || keyCode === 'ArrowRight') {
                // Make it easier to move one tile
                keyInterval.stop();
                keyThresholdTimer.start();
            } else keyInterval.start();
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
}

export function resetControls(): void {
    keysDown.remove('ArrowDown');
}

function handleKeyDown(keyCode: string, repeated: boolean): boolean {
    let newPosition = {
        x: player.position.x,
        y: player.position.y
    };

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

            if (!board.contains(playerMatrix)) {
                // Not on the board anymore, try to reposition
                const containedPos = player.getContainedPosition(board.blocks.length);

                if (board.collides({
                    matrix: player.shape.blocks,
                    position: containedPos
                })) {
                    // Colliding with other blocks, abort!
                    player.shape.rotate(true);
                } else {
                    // All worked out
                    newPosition = containedPos;
                }
            } else if (board.collides(playerMatrix)) {
                player.shape.rotate(true);
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

    const posChanged = !pointEquals(player.position, newPosition);

    if (posChanged) {
        const newMatrix = {
            matrix: player.shape.blocks,
            position: newPosition
        };

        if (!board.collides(newMatrix)) {
            player.position = newPosition;
        }

        if (matrixesColliding(board.blocks, newMatrix) || hardDropped) {
            activateLoop();
        }
    }

    if (triggered) {
        panel.draw(getViewMatrix());
    }

    return triggered;
}
