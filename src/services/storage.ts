import Panel from '../components/panel';
import Board from '../models/board';
import Player from '../models/player';

export const player = new Player({ x: 7, y: 0 });
export const panel = new Panel('game');
export const board = new Board({
    width: 16,
    height: 24
});
