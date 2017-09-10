import loadPlayerScore from './components/player-score';
import { setLoopSpeed } from './services/gameloop';
import handleInput from './services/key-handling';
import loadTouchDetection from './services/modernizr';
import settings from './settings';

loadTouchDetection();
setLoopSpeed(settings.gameSpeed);
handleInput();
loadPlayerScore();
