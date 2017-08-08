import { xyMatrix } from '../../services/matrix-calculations';
import { Color } from '../color';
import Shape from '../shape';

const c = Color.Yellow;

export default class O extends Shape {
    constructor() {
        super(xyMatrix([
            [c, c],
            [c, c]
        ]));
    }
}
