export const handleClick = (sq, hasWinner, boardClicked, index) => (
    squareIsNull(sq) && hasWinner === null ?
        () => boardClicked({clickedSquare: index}) :
        () => null // Ничего не делать))
);

const squareIsNull = (sq) => {
    return sq === null;
};

export const squareContent = (sq) => {
    return squareIsNull(sq) ? '' : sq;
};