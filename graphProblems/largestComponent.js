const graph = {
    0: [ "8", "1", "5" ],
    1: [ "0" ],
    5: [ "0", "8" ],
    8: [ "0", "5" ],
    2: [ "3", "4" ],
    3: [ "2", "4" ],
    4: [ "3", "2" ]
};

const findLargestComponent = (graph) => {
    debugger;
    let max = 0;
    const visited = new Set();

    for (const node in graph) {
        const sum = traverseDepthFirst(graph, node, visited);
        if (sum > max) max = sum;
    }

    return max;
}

const traverseDepthFirst = (graph, src, visited) => {
    if (visited.has(src)) return 0;
    
    visited.add(src);
    let size = 1;

    for (const adjacent of graph[src]) {
        size += traverseDepthFirst(graph, adjacent, visited);
    }

    return size;
}

console.log(findLargestComponent(graph));