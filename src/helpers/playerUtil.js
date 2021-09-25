const playerObj = {
    player: {
        O: 'O',
        X: 'X'
    },
    nextPlayer: (now) => {
        return (now === playerObj.player.O ?
            playerObj.player.X : playerObj.player.O)
    }
}

export default playerObj;
