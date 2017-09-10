import { xyMatrix } from '../../services/matrix-calculations';
import { Color } from '../color';
import Shape from '../shape';

const c = Color.Blue;

export default class I extends Shape {
    constructor() {
        super(xyMatrix([
            [0, 0, 0, 0],
            [c, c, c, c],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]));
    }
}
