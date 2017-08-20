import Matrix from '../interfaces/matrix';
import IPoint from '../interfaces/point';
import IPositionedMatrix from '../interfaces/positioned-matrix';
import { ISize } from '../interfaces/size';
import { matrixContains, matrixesColliding, mergeMatrixes } from '../services/matrix-calculations';
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
        mergeMatrixes(this.blocks, {
            matrix: shape.blocks,
            position
        }, this.blocks);
    }

    public clearFullLines(): number {
        const fullRows = this.getFullLines();
        fullRows.forEach(row => this.deleteRow(row));
        return fullRows.length;
    }

    private getFullLines(): number[] {
        const rowCount = this._blocks[0].length;
        const incompleteRows = new Array<boolean>(rowCount - 1);

        rows:
        for (let y = 0; y < rowCount; y++) {
            for (const col in this._blocks) {
                if (!col[y]) {
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

    public contains(matrix: IPositionedMatrix): boolean {
        return matrixContains(this._blocks, matrix);
    }

    public collides(matrix: IPositionedMatrix): boolean {
        return !this.contains(matrix)
            || matrixesColliding(this.blocks, matrix);
    }
}
