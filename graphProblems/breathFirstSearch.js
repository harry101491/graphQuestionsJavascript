const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

const breathFirstSearch = (graph, source) => {
    const queue = [ source ];

    while (queue.length) {
        const current = queue.shift();
        console.log(current);

        for (const adjacent of graph[current]) {
            queue.push(adjacent);
        }
    }
}

breathFirstSearch(graph, "a");