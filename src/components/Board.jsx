import React from 'react';
import {handleClick, squareContent} from "../helpers/checkFunctions";

const renderSquare = (i, {squares,hasWinner,boardClicked}) => {
    const square = squares[i];
    const disabled = square ? ' disabled' : '';

    return (
        <button
            className={'square' + disabled}
            onClick={handleClick(square, hasWinner, boardClicked, i)}
            key={i}>
            {squareContent(square)}
        </button>
    )
};

const Board = (props) => (
    <div className="square-container">
        {props.squares.map((item, index) => (
            renderSquare(index, props)
        ))}
    </div>
);

export default Board;