import Matrix from '../interfaces/matrix';
import { clonePoint, default as IPoint } from '../interfaces/point';
import IPositionedMatrix from '../interfaces/positioned-matrix';
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
 * Merges parent and child matrixes into the target matrix
 */
export function mergeMatrixes(parent: Matrix, child: IPositionedMatrix, target = copyMatrix(parent)): Matrix {
    const { matrix: childMatrix, position } = child;
    const result = target;

    for (let i = 0; i < childMatrix.length; i++) {
        for (let j = 0; j < childMatrix[0].length; j++) {
            const value = childMatrix[i][j];
            if (typeof value === 'undefined') continue;

            const x = i + position.x;
            const y = j + position.y;

            if (x >= 0 && x < parent.length &&
                y >= 0 && y < parent[0].length &&
                (value || !result[x][y])) {
                result[x][y] = value;
            }
        }
    }

    return result;
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
export function matrixContains(parent: Matrix, child: IPositionedMatrix): boolean {
    const { matrix: childMatrix, position } = child;

    for (let i = 0; i < childMatrix.length; i++) {
        const col = childMatrix[i];
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

export function matrixesColliding(parent: Matrix, child: IPositionedMatrix): boolean {
    const { matrix: childMatrix, position } = child;

    for (let x = 0; x < childMatrix.length; x++) {
        for (let y = 0; y < childMatrix[0].length; y++) {
            if (!childMatrix[x][y]) continue;

            const col = parent[x + position.x];
            if (!col) continue;

            if (col[y + position.y]) {
                return true;
            }
        }
    }

    return false;
}

/**
 * Tries to move matrix to a non-colliding position
 */
export function getUnstuckPosition(matrix: IPositionedMatrix,
    isColliding: (matrix: IPositionedMatrix) => boolean): IPoint | null {

    const { matrix: shape, position } = matrix;

    const maxOffset = Math.ceil(shape.length / 2);
    for (let i = 1; i <= maxOffset; i++) {
        const pos = clonePoint(position);

        // Try down
        pos.y += i;
        if (!isColliding({
            matrix: shape,
            position: pos
        })) return pos;

        // Try up
        pos.y -= i * 2;
        if (!isColliding({
            matrix: shape,
            position: pos
        })) return pos;
        pos.y += i;

        // Try right
        pos.x += i;
        if (!isColliding({
            matrix: shape,
            position: pos
        })) return pos;

        // Try left
        pos.x -= i * 2;
        if (!isColliding({
            matrix: shape,
            position: pos
        })) return pos;
        pos.x += i;
    }

    return null;
}
