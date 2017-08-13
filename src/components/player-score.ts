import { onScoreChange } from '../services/player-score';

let scoreEl: HTMLSpanElement;

export default function loadPlayerScore(): void {
    scoreEl = document.getElementById('player-score') as HTMLSpanElement;
    onScoreChange(score => {
        scoreEl.textContent = score.toLocaleString();
    }, true);
}
