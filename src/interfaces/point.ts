export default interface IPoint {
    x: number;
    y: number;
}

export function clonePoint(point: IPoint): IPoint {
    return { x: point.x, y: point.y };
}
