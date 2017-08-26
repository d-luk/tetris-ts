import IPoint, { clonePoint } from '../interfaces/point';
import { findAny, findIndex } from '../services/arrays';
import { resetControls } from '../services/key-handling';
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
        resetControls();
    }

    // TODO: Remove logic below from model

    /**
     * Calculates a position for
     * the player to be fully on the board
     */
    public getContainedPosition(maxX: number): IPoint {
        const position = clonePoint(this.position);

        // Find lowest x value
        const xLow = (findIndex(this._shape.blocks, col => {
            // Column contains a value
            return findAny(col, value => !!value);
        }) as number) + position.x;

        // Colliding with left boundry
        if (xLow < 0) {
            // Push shape to the right
            position.x += 0 - xLow;
            return position;
        }

        // Find highest x value
        const xHigh = this._shape.blocks.length -
            (findIndex(this._shape.blocks.reverse(), col => {
                // Column contains a value
                return findAny(col, value => !!value);
            }) as number) + position.x;

        // Colliding with right boundry
        if (xHigh > maxX) {
            // Push shape to the left
            position.x -= xHigh - maxX;
            return position;
        }

        return position;
    }
}
