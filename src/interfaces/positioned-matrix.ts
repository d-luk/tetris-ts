import Matrix from './matrix';
import IPoint from './point';

export default interface IPositionedMatrix {
    matrix: Matrix;
    position: IPoint;
}
