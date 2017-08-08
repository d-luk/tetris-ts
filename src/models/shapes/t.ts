import { xyMatrix } from '../../services/matrix-calculations';
import { Color } from '../color';
import Shape from '../shape';

const c = Color.Purple;

export default class T extends Shape {
    constructor() {
        super(xyMatrix([
            [c, c, c],
            [0, c, 0],
            [0, 0, 0]
        ]));
    }
}
