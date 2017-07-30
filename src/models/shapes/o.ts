import { xyMatrix } from '../../services/matrix-calculations';
import { Color } from '../color';
import Shape from '../shape';

export default class O extends Shape {
    constructor() {
        super(xyMatrix([
            [1, 1],
            [1, 1]
        ]), Color.Yellow);
    }
}
