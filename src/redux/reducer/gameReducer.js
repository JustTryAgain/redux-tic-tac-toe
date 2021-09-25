import {handleActions} from 'redux-actions';
import player from '../../helpers/playerUtil';
import {BOARD_CLICKED} from "../actions/boardAction";


const initState = {
    nowPlayer: player.player.O,
    squares: [null, null, null, null, null, null, null, null, null],
};

export default handleActions(
    {
        [BOARD_CLICKED]: (state, action) => ({
            nowPlayer: player.nextPlayer(state.nowPlayer),
            squares: state.squares.map((item, index) =>
                action.payload.clickedSquare === index ? state.nowPlayer : item
            ),
        }),
    },
    initState
);
