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
    const rotated = rotateMatrix(matrix);
    return rotated.reduce<Matrix>((result, col, x) => {
        // Flip columns
        result[x] = col.reverse();
        return result;
    }, []);
}

/**
 * Rotate a square 2D matrix
 */
export function rotateMatrix(matrix: Matrix, reverse?: boolean): Matrix {
    const n = matrix.length;
    const result: Matrix = createMatrix(n);

    // Apply rotation
    for (let x = 0; x < n; ++x) {
        for (let y = 0; y < n; ++y) {
            result[x][y] = matrix[n - y - 1][x];
        }
    }

    return result;
}
