import { eID } from './dom';
import { startLoop, stopLoop } from './gameloop';
import { paused } from './storage';

const modal = eID('pause-modal');
const continueBtn = eID('continue-btn');

export default function handlePauseGame(): void {
    addEventListener('blur', pauseGame);
    continueBtn.addEventListener('click', restartGame);
}

export function pauseGame(): void {
    stopLoop();
    modal.style.display = 'block';
    paused.value = true;
}

export function restartGame(): void {
    startLoop();
    modal.style.display = 'none';
    paused.value = false;
}
