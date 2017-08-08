import Matrix from '../interfaces/matrix';
import { rotateMatrix } from '../services/matrix-calculations';

export default class Shape {
    private _blocks: Matrix;
    public get blocks() {
        return this._blocks;
    }

    constructor(blocks: Matrix) {
        this._blocks = blocks;
    }

    public rotate(reverse = false): void {
        this._blocks = rotateMatrix(this._blocks, reverse);
    }
}
