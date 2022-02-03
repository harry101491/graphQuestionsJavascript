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

const hasPathUndirectedGraph = (graph, src, dest, visited) => {
    if (visited.has(src)) return false;
    if (src === dest) return true;
    
    visited.add(src);

    for (const adjacent of graph[src]) {
        if (hasPathUndirectedGraph(graph, adjacent, dest, visited)) {
            return true;
        }
    }

    return false;
}

const isPathPresentFromSrcToDest = (edges, src, dest) => {
    const graph = populatedUndirectedGraph(edges);

    if (hasPathUndirectedGraph(graph, src, dest, new Set())) {
        console.log("has a path");
    } else {
        console.log("has no path");
    }
}

isPathPresentFromSrcToDest(edges, "j", "m");
