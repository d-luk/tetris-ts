import IPoint, { clonePoint } from '../interfaces/point';
import getRandomShape from '../services/random-shape';
import Shape from './shape';

export default class Player {
    private _shape: Shape;
    public get shape() {
        return this._shape;
    }

    public position: IPoint;
    private _startingPos: IPoint;

    public softDropPoints = 0;

    constructor(startingPosition: IPoint) {
        this._startingPos = startingPosition;
        this.reset();
    }

    public reset(): void {
        this.position = clonePoint(this._startingPos);
        this._shape = getRandomShape();
        this.softDropPoints = 0;
    }
}
