const graph = {
    0: [ "8", "1", "5" ],
    1: [ "0" ],
    5: [ "0", "8" ],
    8: [ "0", "5" ],
    2: [ "3", "4" ],
    3: [ "2", "4" ],
    4: [ "3", "2" ]
};

const countConnectedComponent = (graph) => {
    let counter = 0;
    const visited = new Set();
    
    for (const node in graph) {
        if (traverseDepthFirst(graph, node, visited)) {
            counter ++;
        }
    }

    return counter;
}

const traverseDepthFirst = (graph, src, visited) => {
    if (visited.has(src)) return false;

    visited.add(src);

    for (const adjacent of graph[src]) {
        traverseDepthFirst(graph, adjacent, visited);
    }
    
    return true;
}

console.log(countConnectedComponent(graph));