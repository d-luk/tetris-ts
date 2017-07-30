import { xyMatrix } from '../../services/matrix-calculations';
import { Color } from '../color';
import Shape from '../shape';

export default class J extends Shape {
    constructor() {
        super(xyMatrix([
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ]), Color.Orange);
    }
}
