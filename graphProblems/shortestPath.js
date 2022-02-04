const edges = [
    [ "w", "x" ],
    [ "x", "y" ],
    [ "z", "y" ],
    [ "z", "v" ],
    [ "w", "v" ]
];

const populatedUndirectedGraph = (edges) => {
    const graph = {};

    for (const [ node1, node2 ] of edges) {
        if (!(node1 in graph)) graph[node1] = [];
        if (!(node2 in graph)) graph[node2] = [];
        graph[node1].push(node2);
        graph[node2].push(node1);
    }

    return graph;
}

const breadthFirstTraversal = (graph, src, dest) => {
    const visited = new Set([ src ]);
    const queue = [[src, 0]];

    while (queue.length) {
        const [ node, dist ] = queue.shift();
        if (node === dest) return dist;

        for (const adjacent of graph[node]) {
            if (!visited.has(adjacent)) {
                queue.push([ adjacent, dist + 1 ]);
                visited.add(adjacent);
            }   
        }
    }

    return -1;
}

const shortestPath = (edges, src, dest) => {
    const graph = populatedUndirectedGraph(edges);
    const dist = breadthFirstTraversal(graph, src, dest);
    if (dist === -1) {
        console.log("No Path Found");
    } else {
        console.log("Shortest distance is: ", dist);
    }
}

shortestPath(edges, "w", "z");
