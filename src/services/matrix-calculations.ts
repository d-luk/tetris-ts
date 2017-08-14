import Matrix from '../interfaces/matrix';
import IPoint from '../interfaces/point';
import { ISize } from '../interfaces/size';

export function createMatrix(size: ISize): Matrix {
    const result: Matrix = [];
    for (let col = 0; col < size.width; col++) {
        result[col] = new Array(size.height);
    }
    return result;
}

export function copyMatrix(matrix: Matrix): Matrix {
    return matrix.reduce<Matrix>((result, col, x) => {
        result[x] = col.slice();
        return result;
    }, []);
}

export function getMatrixSize(matrix: Matrix): ISize {
    return {
        width: matrix.length,
        height: matrix[0].length
    };
}

/**
 * Merges m1 and m2 into a new matrix with the size of m1
 * @param position Position of m2 on m1
 */
export function mergeMatrixes(m1: Matrix, m2: Matrix, position: IPoint, target?: Matrix): Matrix {
    const result = target || copyMatrix(m1);

    for (let i = 0; i < m2.length; i++) {
        for (let j = 0; j < m2[0].length; j++) {
            const value = m2[i][j];
            if (typeof value === 'undefined') continue;

            const x = i + position.x;
            const y = j + position.y;

            if (x >= 0 && x < m1.length &&
                y >= 0 && y < m1[0].length &&
                (value || !result[x][y])) {
                result[x][y] = value;
            }
        }
    }

    return result;
}

export function addMatrix(target: Matrix, source: Matrix, position: IPoint): void {
    mergeMatrixes(target, source, position, target);
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
    const result = createMatrix({ width: l, height: l });

    // Apply rotation
    for (let x = 0; x < l; x++) {
        for (let y = 0; y < l; y++) {
            result[x][y] = reverse
                ? matrix[l - y - 1][x]
                : matrix[y][l - x - 1];
        }
    }

    return result;
}

/**
 * Checks if child is not outside parent matrix
 */
export function matrixContains(parent: Matrix, child: Matrix, position: IPoint): boolean {
    for (let i = 0; i < child.length; i++) {
        const col = child[i];
        for (let j = 0; j < col.length; j++) {
            if (!col[j]) continue;

            const x = i + position.x;
            const y = j + position.y;

            if (x < 0 || x >= parent.length ||
                y < 0 || y >= parent[0].length) {
                return false;
            }
        }
    }

    return true;
}

export function matrixesColliding(m1: Matrix, m2: Matrix, position: IPoint): boolean {
    for (let x = 0; x < m2.length; x++) {
        for (let y = 0; y < m2[0].length; y++) {
            if (!m2[x][y]) continue;
            if (m1[x + position.x][y + position.y]) {
                return true;
            }
        }
    }
    return false;
}
