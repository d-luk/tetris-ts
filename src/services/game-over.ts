import { resetScore } from './player-score';
import { board, player } from './storage';

export default function gameOver(): void {
    board.clear();
    player.reset();
    resetScore();
}
