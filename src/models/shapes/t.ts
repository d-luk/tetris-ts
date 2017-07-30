import { xyMatrix } from '../../services/matrix-calculations';
import { Color } from '../color';
import Shape from '../shape';

export default class T extends Shape {
    constructor() {
        super(xyMatrix([
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0]
        ]), Color.Orange);
    }
}
