import { getLocalItem, setLocalItem } from './browser-storage';

let highScore = parseInt(getLocalItem('highscore') || '', 10) || 0;

export function getHighScore() {
    return highScore;
}

export function setHighScore(value: number): void {
    highScore = value;
    setLocalItem('highscore', highScore.toString());
}
