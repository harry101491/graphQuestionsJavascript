const grid = [
    [ "W", "L", "W", "W", "W" ],
    [ "W", "L", "W", "W", "W" ],
    [ "W", "W", "W", "L", "W" ],
    [ "W", "W", "L", "L", "W" ],
    [ "L", "W", "W", "L", "L" ],
    [ "L", "L", "W", "W", "W" ]
];

const traverseGrid = (grid, r, c, visited) => {
    const rowInBound = 0 <= r  && r < grid.length;
    const columnInBound = 0 <= c && c < grid[0].length;
    if (!rowInBound || !columnInBound) return false;

    if (grid[r][c] === 'W') return false;

    const pos = r + ',' + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    traverseGrid(grid, r - 1, c, visited);
    traverseGrid(grid, r + 1, c, visited);
    traverseGrid(grid, r, c + 1, visited);
    traverseGrid(grid, r, c - 1, visited);

    return true;
}

const islandCount = (grid) => {
    let sum = 0;
    const visited = new Set();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (traverseGrid(grid, r, c, visited)) {
                sum ++;
            }
        }
    }

    return sum;
}

console.log(islandCount(grid));