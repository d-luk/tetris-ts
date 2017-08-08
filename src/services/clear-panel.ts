import IPanel from '../models/panel';

export default function clearPanel(panel: IPanel): void {
    panel.ctx.clearRect(0, 0, panel.size.width, panel.size.height);
}
