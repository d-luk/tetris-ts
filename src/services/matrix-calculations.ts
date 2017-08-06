import Matrix from '../interfaces/matrix';
import IPoint from '../interfaces/point';

export function createMatrix(size: number): Matrix {
    const result: Matrix = [];
    for (let col = 0; col < size; col++) {
        result[col] = new Array(size);
    }
    return result;
}

export function addMatrix(target: Matrix, source: Matrix, position: IPoint): void {
    for (let x = 0; x < source.length; x++) {
        for (let y = 0; y < source[0].length; y++) {
            const value = source[x][y];
            if (!value) continue;
            target[x + position.x][y + position.y] = value;
        }
    }
}

/**
 * Transforms matrix to be used in the coordinate system
 */
export function xyMatrix(matrix: Matrix): Matrix {
    return rotateMatrix(matrix)
        .reduce<Matrix>((result, col, x) => {
            // Flip columns
            result[x] = col.reverse();
            return result;
        }, []);
}

/**
 * Rotate a square 2D matrix
 */
export function rotateMatrix(matrix: Matrix, reverse = false): Matrix {
    const l = matrix.length;
    const result = createMatrix(l);

    // Apply rotation
    for (let x = 0; x < l; x++) {
        for (let y = 0; y < l; y++) {
            result[x][y] = reverse
                ? matrix[y][l - x - 1]
                : matrix[l - y - 1][x];
        }
    }

    return result;
}
