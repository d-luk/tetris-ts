import Matrix from '../interfaces/matrix';
import { mergeMatrixes } from './matrix-calculations';
import { board, player } from './storage';

export default function getViewMatrix(): Matrix {
    return mergeMatrixes(board.blocks, {
        matrix: player.shape.blocks,
        position: player.position
    });
}
