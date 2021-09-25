import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; //f*u*c*k
import {actionBoardClick} from '../redux/actions/boardAction';
import * as selectors from '../redux/selectors/indexSelectors';
import Game from '../components/Game';

const mapStateToProps = (state) => ({
    nowPlayer: selectors.nowPlayer(state),
    squares: selectors.squares(state),
    hasWinner: selectors.hasWinner(state),
});

const mapDispatchToProps = (dispatch) => ({
    boardClicked: bindActionCreators(actionBoardClick.boardClicked,dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
