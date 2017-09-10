import { getHighScore } from '../services/player-highscore';
import { onScoreChange } from '../services/player-score';

export default function loadPlayerScore(): void {
    const scoreEl = document.getElementById('player-score') as HTMLSpanElement;
    const highScore = document.getElementById('player-highscore') as HTMLSpanElement;

    onScoreChange(score => {
        scoreEl.textContent = score.toLocaleString();
        highScore.textContent = getHighScore().toString();
    }, true);
}
