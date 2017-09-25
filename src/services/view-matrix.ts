import Matrix from '../interfaces/matrix';
import createGhost from './ghost-matrix';
import { mergeMatrixes } from './matrix-calculations';
import { board, player } from './storage';

export default function getViewMatrix(): Matrix {

    const playerMatrix = {
        matrix: player.shape.blocks,
        position: player.position
    };

    const ghost = createGhost(board, playerMatrix);

    const merged = mergeMatrixes(
        mergeMatrixes(board.blocks, ghost),
        playerMatrix
    );

    // Strip top two rows
    return merged.reduce((result: Matrix, col) => {
        result.push(col.slice(2));
        return result;
    }, []);
}
