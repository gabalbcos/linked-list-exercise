// Create chessboard 
const gameBoard = () => {
    // Initiate variables and create chessboard table
    const defaultStartLocation = [4,5];
    const coordArray = [];
    const chessTable = document.createElement("table");

    // Create the board cells and apply position values to each cell
    chessTable.setAttribute("class", "center");
    for(let i = 0; i < 8; i += 1) {
        const tableRow = document.createElement("tr");
        let cellRowCoord = Math.abs(i - 7);
        tableRow.textContent = cellRowCoord; 
        for (let z = 0; z < 8; z += 1) {
            const tableCell = document.createElement("td");
            let cellColumnCoord = z;
            tableCell.textContent = cellColumnCoord;
            // Loop to change color of cell of odd values 
            if((i + z) % 2 == 0) {
                tableCell.setAttribute("class", "cell whitecell");
                tableRow.appendChild(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellColumnCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0,2);
            } else {
                tableCell.setAttribute("class", "cell blackcell");
                tableRow.appendChild(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellColumnCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0,2);
            }
        }
    chessTable.appendChild(tableRow);    
    }

    // Create Knight and position him at 0,0
    const cellNodes = chessTable.querySelectorAll("td");
    cellNodes.forEach((cellNode) => {
        if(defaultStartLocation.toString() === cellNode.dataset.coordArray) {
            let knightImg = document.createElement("img");
            knightImg.src = "./assets/knight.svg";
            cellNode.appendChild(knightImg);
        }
    });
    document.body.appendChild(chessTable)
}

export {gameBoard};
