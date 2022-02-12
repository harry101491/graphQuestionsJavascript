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

const findTreeNode = (root, target) => {
    if (root === null) return false;
    if (root.value === target) return true; 

    return findTreeNode(root.left, target) || findTreeNode(root.right, target);
}

console.log(findTreeNode(a, 'x'));