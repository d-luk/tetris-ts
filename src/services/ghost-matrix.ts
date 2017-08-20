import Matrix from '../interfaces/matrix';
import { clonePoint } from '../interfaces/point';
import IPositionedMatrix from '../interfaces/positioned-matrix';
import Board from '../models/board';
import { Color } from '../models/color';

const ghostColor = Color.Grey;

export default function createGhost(board: Board, pm: IPositionedMatrix): IPositionedMatrix {
    const matrix = pm.matrix;
    const position = clonePoint(pm.position);

    // Calculate y position
    let y = position.y;
    do {
        y++;
    } while (!board.collides({
        matrix,
        position: { x: position.x, y }
    }));
    position.y = y - 1;

    // Copy matrix with new color
    const ghost: Matrix = matrix.map(col => col.map(x => {
        if (x) return ghostColor;
        return x;
    }));

    return { matrix: ghost, position };
}
