import Matrix from '../interfaces/matrix';
import IPoint from '../interfaces/point';
import { ISize } from '../interfaces/size';
import { addMatrix } from '../services/matrix-calculations';
import Shape from './shape';

export default class Board {
    public readonly blocks: Matrix;
    public readonly size: ISize;

    constructor(size: ISize) {
        this.size = size;
        this.blocks = [];
        for (let x = 0; x < size.width; x++) {
            this.blocks[x] = new Array(size.height);
        }
    }

    public place(shape: Shape, position: IPoint) {
        addMatrix(this.blocks, shape.blocks, position);
    }
}
