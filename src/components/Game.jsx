import React from 'react';
import Board from './Board';

const status = (winner, nowPlayer) =>
    winner ? 'Winner: ' + winner : 'Next player: ' + nowPlayer;

const Game = (props) => (
    <div className="game">
        <Board {...props} />
        <div className="game-info">
            <div>{status(props.hasWinner, props.nowPlayer)}</div>
        </div>
    </div>
);

export default Game;
