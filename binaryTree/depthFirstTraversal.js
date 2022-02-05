class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const depthFirstTraversal = (root) => {
    if (root === null) return;

    console.log(root.value);
    depthFirstTraversal(root.left);
    depthFirstTraversal(root.right);
}

const depthFirstTraversalIterative = (root) => {
    const stack = [ root ];

    while(stack.length) {
        const current = stack.pop();
        console.log(current.value);
        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }
}

depthFirstTraversalIterative(a);

