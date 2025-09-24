// Given the root of a binary tree,
// imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}
function buildTree(root) {
    let start = new TreeNode(root[0], null, null);
    let i = 1;
    let queue = [start];

    while (i < root.length) {
        const curr = queue.shift();

        if (root[i]) {
            curr.left = new TreeNode(root[i], null, null);
            queue.push(curr.left);
        }
        i += 1;

        if (root[i]) {
            curr.right = new TreeNode(root[i], null, null);
            queue.push(root[i]);
        }
        i += 1;
    }
    return start;
}
var rightSideView = function (root) {
    let result = [];

    if (root === null) return result;

    let queue = [root];

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();

            if (i == size - 1) {
                result.push(curr.val);
            }

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }
    return result;
};
const tree = buildTree([1, 2, 3, null, 5, null, 4]);
console.log(rightSideView(tree));

// Time Complexity : O(n)
// Space Complexity : O(n)
