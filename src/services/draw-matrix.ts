import Panel from '../components/panel';
import Matrix from '../interfaces/matrix';
import { ISize } from '../interfaces/size';
import { Color } from '../models/color';
import settings from '../settings';

export default function drawMatrix(panel: Panel, matrix: Matrix): void {
    const ctx = panel.ctx;

    const tileSize: ISize = {
        width: panel.size.width / matrix.length,
        height: panel.size.height / matrix[0].length
    };

    matrix.forEach((col, x) => col.forEach((item, y) => {
        if (typeof item === 'undefined' ||
            !settings.drawEmptyTiles && !item) return;

        ctx.fillStyle = item ? getColorCode(item) : '#8ED6FF';
        ctx.fillRect(x * tileSize.width, y * tileSize.height,
            tileSize.width, tileSize.height);
    }));
}

function getColorCode(color: Color): string {
    switch (color) {
        case Color.Yellow:
            return '#ffeb3b';
        case Color.Blue:
            return '#03a9f4';
        case Color.Red:
            return '#f44336';
        case Color.Green:
            return '#4caf50';
        case Color.Orange:
            return '#ff9800';
        case Color.Pink:
            return '#fbafbc';
        case Color.Purple:
            return '#9c27b0';
        default:
            return '#000';
    }
}
