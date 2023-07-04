// Create board
const gameBoard = (x,y) => {
    let boardCoordinates = [];
    for (let i = 0; i < x; i += 1) {
        for (let j = 0; j < y; j += 1) {
            boardCoordinates.push([i,j]);
        }
    }
    console.log(boardCoordinates);
    return boardCoordinates;
}

