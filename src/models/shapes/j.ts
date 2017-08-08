import { xyMatrix } from '../../services/matrix-calculations';
import { Color } from '../color';
import Shape from '../shape';

const c = Color.Pink;

export default class J extends Shape {
    constructor() {
        super(xyMatrix([
            [0, c, 0],
            [0, c, 0],
            [c, c, 0]
        ]));
    }
}
