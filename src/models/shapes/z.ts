import { xyMatrix } from '../../services/matrix-calculations';
import { Color } from '../color';
import Shape from '../shape';

const c = Color.Green;

export default class Z extends Shape {
    constructor() {
        super(xyMatrix([
            [c, c, 0],
            [0, c, c],
            [0, 0, 0]
        ]));
    }
}
