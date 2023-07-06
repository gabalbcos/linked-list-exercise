class Node {
    constructor(row, column, distanceFromStartPosition){
        this.row = row,
        this.column = column.
        this.distanceFromStartPosition = distanceFromStartPosition;
    }
    getPositionString(){
        return `${this.row}, ${this.col}`
    }
}

const getNeighbors = (row, col) => {
    const neighbors = [];

    for  (const direction of directions) {
        const[rowChange, colChange] = direction;

        const neighborRow = row + rowChange;
        const neighborCol = col + colChange; 

        neighbors.push([neighborRow, neighborCol]);
    }
}

function getKnightShortestPath(targetRow, targetCol){
    //for breadth first search
    const queue = [];
    //starting position
    const startNode = new Node (0, 0, 0);
    queue.push(startNode);

    // control visited positions
    const visited = new Set();

    while(queue.length > 0) {
        // Remove node
        // In practice, we should use a real Queu class to dequeu in 0(1)
        // time instead of 0(n) time. 
        const node = queue.shift()
        const {row, column, distanceFromStartPosition} = node
    }
    // Process node
    if (row === targetRow && col === targetCol) return distanceFromStartPosition;
    visited.add(node.getPositionString())

    // Add neighbors
    for (const neighbors of getNeighbors(row, col)){
        const [neighborRow, neighborCol] = neighbor;
        const neighborNode = new Node(neighborRow, neighborCol, distanceFromStartPosition + 1);

        if(visited.has(neighbor.getPositionString())) continue;

        queue.push(neighborNode);
    }

}

    const directions = [[-2,1],[-2,-1],[-1,2],[-1,-2],[1,2],[2,1],[2,-1],[1,-2]];