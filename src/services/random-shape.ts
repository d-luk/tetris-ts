import I from '../models/shapes/i';
import J from '../models/shapes/j';
import L from '../models/shapes/l';
import O from '../models/shapes/o';
import S from '../models/shapes/s';
import T from '../models/shapes/t';
import Z from '../models/shapes/z';

const shapes = [I, J, L, O, S, T, Z];

export default function getRandomShape() {
    const Shape = shapes[Math.floor(Math.random() * shapes.length)];
    return new Shape();
}
