/**
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
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

var lowestCommonAncestor = function (root, p, q) {
    function dfs(node) {
        if (node == null) return null;
        if (node.val == p.val || node.val == q.val) return node;

        let left = dfs(node.left);
        let right = dfs(node.right);

        if (left && right) return node;

        return left ? left : right;
    }
    const result = dfs(root);
    return result;
};
const b = new BinaryTree();
const tree = b.buildByLevelOrder([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
console.log(lowestCommonAncestor(tree, new TreeNode(5), new TreeNode(1)));
