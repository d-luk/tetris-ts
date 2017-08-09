export default interface IPoint {
    x: number;
    y: number;
}

export function clonePoint(point: IPoint): IPoint {
    return { x: point.x, y: point.y };
}

export function pointEquals(a: IPoint, b: IPoint): boolean {
    return a.x === b.x && a.y === b.y;
}
