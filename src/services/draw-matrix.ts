import Matrix from '../interfaces/matrix';
import IPanel from '../models/panel';

export default function drawMatrix(panel: IPanel, matrix: Matrix, tileSize: number): void {
    matrix.forEach((col, x) => col.forEach((item, y) => {
        if (typeof item === 'undefined') return;
        panel.ctx.fillStyle = item ? '#000' : '#8ED6FF';
        panel.ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }));
}
