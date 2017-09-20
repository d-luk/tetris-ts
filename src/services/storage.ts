import Panel from '../components/panel';
import Board from '../models/board';
import Player from '../models/player';

const boardSize = {
    width: 10,
    height: 22
};

export const player = new Player({ x: boardSize.width / 2 - 1, y: 2 });
export const panel = new Panel('game');
export const board = new Board(boardSize);
