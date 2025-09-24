/*
Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
Return the number of good nodes in the binary tree.
Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
*/
class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree {
    buildByLevelOrder(levelArr) {
        let start = new TreeNode(levelArr[0], null, null);
        let i = 1;
        let queue = [start];

        while (i < levelArr.length) {
            const curr = queue.shift();

            if (levelArr[i]) {
                curr.left = new TreeNode(levelArr[i], null, null);
                queue.push(curr.left);
            }
            i += 1;

            if (levelArr[i]) {
                curr.right = new TreeNode(levelArr[i], null, null);
                queue.push(curr.right);
            }
            i += 1;
        }
        return start;
    }
}
var goodNodes = function (root) {
    let max = root.val;
    let goodCount = 0;

    function dfs(root, max) {
        if (root == null) return;

        if (root.val >= max) {
            goodCount += 1;
            max = root.val;
        }
        dfs(root.left, max);
        dfs(root.right, max);
    }
    dfs(root, max);

    return goodCount;
};
const b = new BinaryTree();
const tree = b.buildByLevelOrder([3, 1, 4, 3, null, 1, 5]);
console.log(goodNodes(tree));
