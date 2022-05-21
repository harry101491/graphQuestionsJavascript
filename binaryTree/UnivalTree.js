class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('c');
const c = new Node('b');
const d = new Node('b');
const e = new Node('b');
const f = new Node('b');

a.left = b;
a.right = c;
c.left = d;
c.right = e;
e.right = f;


const isUnival = (root) => {
    if (root === null) return false;
    if (root.left === null && root.right === null) return true;
    const nodeUnival = ((root.left && root.left.value) === root.value) && ((root.right && root.right.value) === root.value);
    const leftUnival = (root.left && isUnival(root.left));
    const rightUnival = (root.right && isUnival(root.right));

    return nodeUnival && leftUnival && rightUnival;
}

const countUnivalSubTree = (root, count = 0) => {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return count += 1;
    const leftUnival = root.left && isUnival(root.left);
    const rightUnival = root.right && isUnival(root.right);
    if (leftUnival && rightUnival && isUnival(root)) return count += 1;
    countUnivalSubTree(root.left, count);
    countUnivalSubTree(root.right, count);
    return count;
}

console.log(countUnivalSubTree(a, 0));