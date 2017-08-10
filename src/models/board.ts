import Matrix from '../interfaces/matrix';
import IPoint from '../interfaces/point';
import { ISize } from '../interfaces/size';
import { addMatrix, matrixContains, matrixesColliding } from '../services/matrix-calculations';
import Shape from './shape';

export default class Board {
    private _blocks: Matrix;
    public get blocks() { return this._blocks; }

    public readonly size: ISize;

    constructor(size: ISize) {
        this.size = size;
        this.clear();
    }

    public place(shape: Shape, position: IPoint): void {
        addMatrix(this.blocks, shape.blocks, position);

        this.getFullRows()
            .forEach(row => this.deleteRow(row));
    }

    private getFullRows(): number[] {
        const rowCount = this._blocks[0].length;
        const incompleteRows = new Array<boolean>(rowCount - 1);

        rows:
        for (let y = 0; y < rowCount; y++) {
            // tslint:disable-next-line:prefer-for-of
            for (let x = 0; x < this._blocks.length; x++) {
                if (!this._blocks[x][y]) {
                    incompleteRows[y] = true;
                    continue rows;
                }
            }
        }

        const result: number[] = [];
        for (let row = 0; row < rowCount; row++) {
            if (!incompleteRows[row]) result.push(row);
        }
        return result;
    }

    private deleteRow(row: number): void {
        this._blocks.forEach(col => {
            col.splice(row, 1);
            col.unshift(undefined);
        });
    }

    public clear(): void {
        this._blocks = [];
        for (let x = 0; x < this.size.width; x++) {
            this._blocks[x] = new Array(this.size.height);
        }
    }

    public contains(matrix: Matrix, position: IPoint): boolean {
        return matrixContains(this._blocks, matrix, position);
    }

    public collides(matrix: Matrix, position: IPoint): boolean {
        return !this.contains(matrix, position)
            || matrixesColliding(this.blocks, matrix, position);
    }
}
