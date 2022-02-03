const graph = {
    f: [ 'g', 'i' ],
    g: [ 'h' ],
    h: [],
    i: [ 'g', 'k' ],
    j: [ 'i' ],
    k: []
};


const hasPathDepthFirst = (graph, src, dest) => {
    if (src === dest) return true;

    for (const adjacent of graph[src]) {
        if (hasPath(graph, adjacent, dest)) {
            return true;
        }
    }

    return false;
}

const hasPathBreadthFirst = (graph, src, dest) => {
    const queue = [ src ];

    while (queue.length) {
        const current = queue.shift();
        if (current === dest) return true;
        for (const adjacent of graph[current]) {
            queue.push(adjacent);
        }
    }

    return false;
}

console.log(hasPathBreadthFirst(graph, "f", "k"));