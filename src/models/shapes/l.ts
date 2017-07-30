import { xyMatrix } from '../../services/matrix-calculations';
import { Color } from '../color';
import Shape from '../shape';

export default class L extends Shape {
    constructor() {
        super(xyMatrix([
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ]), Color.Orange);
    }
}
