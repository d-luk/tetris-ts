import { xyMatrix } from '../../services/matrix-calculations';
import { Color } from '../color';
import Shape from '../shape';

const c = Color.Orange;

export default class L extends Shape {
    constructor() {
        super(xyMatrix([
            [0, c, 0],
            [0, c, 0],
            [0, c, c]
        ]));
    }
}
