import IPoint from '../interfaces/point';
import Shape from './shape';

export default class Player {
    constructor(
        public shape: Shape,
        public position: IPoint
    ) { }
}
