// Given the root of a binary tree,
// imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
function buildTree(root) {
    let start = new TreeNode(root[0], null, null);
    let i = 1;
    let queue = [start];

    while (i < root.length) {
        const curr = queue.shift();

        curr.left = new TreeNode(root[i], null, null);
        if (curr.left) queue.push(curr.left);
        i += 1;

        curr.right = new TreeNode(root[i], null, null);
        if (curr.right) queue.push(curr.right);
        i += 1;
    }
    return start;
}
var rightSideView = function (root) {
    let result = [];
    let rightLevel = 0;
    let leftRoot = root;
    let rightRoot = root;

    while (rightRoot.right != null) {
        result.push(rightRoot.val);
        rightRoot = rightRoot.right;
        rightLevel += 1;
    }
    while (leftRoot.left != null) {
        leftRoot = leftRoot.left;
        if (rightLevel <= 0) {
            result.push(leftRoot.val);
        }
        rightLevel -= 1;
    }
    return result;
};
// const tree = buildTree([1, 2, 3, 4, null, null, null, 5]);
// console.log(JSON.stringify(tree));

const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: { val: 5, left: null, right: null },
            right: { val: 0, left: null, right: null },
        },
        right: { val: null, left: null, right: null },
    },
    right: {
        val: 3,
        left: { val: null, left: null, right: null },
        right: { val: null, left: null, right: null },
    },
};
console.log(rightSideView(tree));
