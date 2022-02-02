const edges = [
    [ "i", "j" ],
    [ "k", "i" ],
    [ "m", "k" ],
    [ "k", "l" ],
    [ "o", "n" ]
];

const populateDirectedGraph = (edges) => {
    const graph = {};

    for (const [ node1, node2 ] of edges) {
        if (!(node1 in graph)) graph[node1] = [];
        graph[node1].push(node2);
    }

    return graph;
}

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

console.log(populatedUndirectedGraph(edges));
