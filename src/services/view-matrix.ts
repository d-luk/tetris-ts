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

    return mergeMatrixes(
        mergeMatrixes(board.blocks, ghost),
        playerMatrix
    );
}
