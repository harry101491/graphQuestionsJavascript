class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const findSum = (root) => {
    if (root === null) return 0;

    return root.value + findSum(root.left) + findSum(root.right);
}

const findSumIterative = (root) => {
    if (root === null) return 0;
    const queue = [ root ];
    let sum = 0;

    while (queue.length) {
        const current = queue.shift();
        sum += current.value;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return sum;
}

// console.log(findSumIterative(a));
console.log(findSum(a));