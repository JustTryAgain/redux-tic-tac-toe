import {combineReducers} from 'redux';
import game from './reducer/gameReducer';

export default combineReducers({
    game: game,
});
