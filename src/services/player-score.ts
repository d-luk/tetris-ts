import { getHighScore, setHighScore } from './player-highscore';

let currentScore = 0;

export function addScore(points: number): void {
    currentScore += points;
    if (currentScore > getHighScore()) {
        setHighScore(currentScore);
    }
    triggerScoreChange();
}

export function resetScore(): void {
    currentScore = 0;
    triggerScoreChange();
}

const subscribers: Array<(score: number) => void> = [];
export function onScoreChange(handler: (score: number) => void, triggerOnInit = false): void {
    subscribers.push(handler);
    if (triggerOnInit) handler(currentScore);
}

function triggerScoreChange(): void {
    subscribers.forEach(handler => handler(currentScore));
}
