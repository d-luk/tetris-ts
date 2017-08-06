import Matrix from '../interfaces/matrix';
import IPoint from '../interfaces/point';
import { ISize } from '../interfaces/size';
import { addMatrix } from '../services/matrix-calculations';
import Shape from './shape';

export default class Board {
    private _blocks: Matrix;
    public get blocks() { return this._blocks; }

    public readonly size: ISize;

    constructor(size: ISize) {
        this.size = size;
        this.clear();
    }

    public place(shape: Shape, position: IPoint) {
        addMatrix(this.blocks, shape.blocks, position);
    }

    public clear(): void {
        this._blocks = [];
        for (let x = 0; x < this.size.width; x++) {
            this._blocks[x] = new Array(this.size.height);
        }
    }
}
