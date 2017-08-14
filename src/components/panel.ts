import Matrix from '../interfaces/matrix';
import { ISize } from '../interfaces/size';
import drawGrid from '../services/draw-grid';
import drawMatrix from '../services/draw-matrix';
import { getMatrixSize } from '../services/matrix-calculations';

export default class Panel {
    public readonly ctx: CanvasRenderingContext2D;
    public readonly size: ISize;
    public readonly pixelRatio: number;

    constructor(id: string) {
        const canvas = document.getElementById(id) as HTMLCanvasElement;
        this.pixelRatio = devicePixelRatio || 1;

        // Read canvas size
        this.size = {
            width: parseInt(canvas.getAttribute('width') as string, 10) * this.pixelRatio,
            height: parseInt(canvas.getAttribute('height') as string, 10) * this.pixelRatio
        };

        // Fix scaling for small viewports
        if (this.size.width !== canvas.offsetWidth) {
            canvas.setAttribute('width', `${this.size.width}`);
        }

        if (this.size.height !== canvas.offsetHeight) {
            canvas.setAttribute('height', `${this.size.height}`);
        }

        // Get drawing context
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Context not found!');
        this.ctx = ctx;
    }

    public draw(matrix: Matrix): void {
        this.clear();
        drawGrid(this, getMatrixSize(matrix));
        drawMatrix(this, matrix);
    }

    private clear(): void {
        this.ctx.clearRect(0, 0, this.size.width, this.size.height);
    }
}
