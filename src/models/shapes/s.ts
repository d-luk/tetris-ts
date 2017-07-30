import { xyMatrix } from '../../services/matrix-calculations';
import { Color } from '../color';
import Shape from '../shape';

export default class S extends Shape {
    constructor() {
        super(xyMatrix([
            [1, 1, 0],
            [0, 1, 1]
        ]), Color.Red);
    }
}