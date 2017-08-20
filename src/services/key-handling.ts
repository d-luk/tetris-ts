import { pointEquals } from '../interfaces/point';
import settings from '../settings';
import { activateLoop } from './gameloop';
import { mergeMatrixes } from './matrix-calculations';
import { addScore } from './player-score';
import { board, panel, player } from './storage';

const handleKeys = () => document.addEventListener('keydown', e => {

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
            if (!board.contains({
                matrix: player.shape.blocks, position:
                newPosition
            })) {
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

            break;
        default:
            triggered = false;
            break;
    }

    const posChanged = !pointEquals(player.position, newPosition);

    if (posChanged) {
        if (!board.collides({
            matrix: player.shape.blocks,
            position: newPosition
        })) {
            player.position = newPosition;
        } else activateLoop();
    }

    if (triggered) {
        e.preventDefault();
        const viewMatrix = mergeMatrixes(board.blocks, player.shape.blocks, player.position);
        panel.draw(viewMatrix);
    }
});

export default handleKeys;
