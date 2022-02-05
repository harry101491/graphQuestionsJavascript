const grid = [
    [ "W", "L", "W", "W", "W" ],
    [ "W", "L", "W", "W", "W" ],
    [ "W", "W", "W", "L", "W" ],
    [ "W", "W", "L", "L", "W" ],
    [ "L", "W", "W", "L", "L" ],
    [ "L", "L", "W", "W", "W" ]
];

const traverseGrid = (grid, r, c, visited) => {
    const rowInBound = 0 <= r && r < grid.length;
    const columnInBound = 0 <= c && c < grid[0].length;
    if (!rowInBound || !columnInBound) return 0;

    if (grid[r][c] === 'W') return 0;

    const pos = r + ',' + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);
    
    let size = 1;
    size += traverseGrid(grid, r - 1, c, visited);
    size += traverseGrid(grid, r + 1, c, visited);
    size += traverseGrid(grid, r, c + 1, visited);
    size += traverseGrid(grid, r, c - 1, visited);

    return size;
}


const minIsLand = (grid) => {
    let min = Infinity;
    const visited = new Set();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            const val = traverseGrid(grid, r, c, visited);
            if (val > 0 && val < min) min = val;
        }
    }

    return min;
}

console.log(minIsLand(grid));