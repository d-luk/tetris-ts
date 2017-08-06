import Matrix from '../interfaces/matrix';
import { rotateMatrix } from '../services/matrix-calculations';
import { Color } from './color';

export default class Shape {
    private _blocks: Matrix;
    public get blocks() {
        return this._blocks;
    }

    public readonly color: Color;

    constructor(blocks: Matrix, color: Color) {
        this._blocks = blocks;
        this.color = color;
    }

    public rotate(reverse = false): void {
        this._blocks = rotateMatrix(this._blocks, reverse);
    }
}
