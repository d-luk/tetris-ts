import IPoint, { clonePoint } from '../interfaces/point';
import { findAny, findIndex } from '../services/arrays';
import Board from './board';
import Shape from './shape';

export default class Player {
    constructor(
        public shape: Shape,
        public position: IPoint
    ) { }

    /**
     * Calculates a position for
     * the player to be fully on the board
     */
    public getContainedPosition(board: Board): IPoint {
        const position = clonePoint(this.position);

        // Find lowest x value
        const xLow = (findIndex(this.shape.blocks, col => {
            // Column contains a value
            return findAny(col, value => !!value);
        }) as number) + position.x;

        // Push shape to the right
        if (xLow < 0) {
            position.x += 0 - xLow;
            return position;
        }

        // Find highest x value
        const xHigh = this.shape.blocks.length -
            (findIndex(this.shape.blocks.reverse(), col => {
                // Column contains a value
                return findAny(col, value => !!value);
            }) as number) + position.x;

        // Push shape to the left
        if (xHigh > board.blocks.length) {
            position.x -= xHigh - board.blocks.length;
            return position;
        }

        return position;
    }
}
