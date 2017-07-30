import { ISize } from '../interfaces/size';

export default interface IPanel {
    ctx: CanvasRenderingContext2D;
    size: ISize;
}

export function getPanel(canvasID: string, size: ISize): IPanel {
    const canvas = document.getElementById(canvasID) as HTMLCanvasElement;
    if (!canvas) throw new Error('Canvas not found!');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Context not found!');

    return { ctx, size };
}