const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

const depthFirstPrint = (graph, start) => {
    const stack = [ start ];

    while (stack.length) {
        const current = stack.pop();
        console.log(current);

        for (const adjacent of graph[current]) {
            stack.push(adjacent);
        }
    }
}

const depthFirstPrintRecurse = (graph, start) => {
    console.log(start);
    for (const adjacent of graph[start]) {
        depthFirstPrintRecurse(graph, adjacent);
    }
}

depthFirstPrint(graph, "a");
depthFirstPrintRecurse(graph, "a");