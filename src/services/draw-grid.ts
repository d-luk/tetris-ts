import { ISize } from '../interfaces/size';
import IPanel from '../models/panel';

export default function drawGrid(panel: IPanel, gridSize: ISize): void {
    const tileSize: ISize = {
        width: panel.size.width / gridSize.width,
        height: panel.size.height / gridSize.height
    };

    const { ctx } = panel;
    ctx.strokeStyle = '#efefef';
    ctx.lineWidth = panel.pixelRatio;

    for (let x = 0; x < panel.size.width; x += tileSize.width) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, panel.size.height);
        ctx.stroke();
    }

    for (let y = 0; y < panel.size.height; y += tileSize.height) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(panel.size.width, y);
        ctx.stroke();
    }
}
