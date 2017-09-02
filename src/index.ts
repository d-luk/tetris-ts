import loadPlayerScore from './components/player-score';
import { setLoopSpeed } from './services/gameloop';
import handleInput from './services/key-handling';
import settings from './settings';
import './vendor/modernizr.min.js';

setLoopSpeed(settings.gameSpeed);
handleInput();
loadPlayerScore();
