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
    inOrder(root) {
        if (root == null) {
            return;
        } else {
            this.inOrder(root.left);
            console.log(root.val);
            this.inOrder(root.right);
        }
    }
    preOrder(root) {
        if (root == null) {
            return;
        } else {
            console.log(root.val);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    postOrder(root) {
        if (root == null) {
            return;
        } else {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.val);
        }
    }
    levelOrder(root) {
        if (!root) return;
        let queue = [root];
        while (queue.length > 0) {
            let node = queue.shift();
            console.log(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    printTree(root, space = 0, levelSpace = 6) {
        if (!root) return;

        // print right subtree first (appears on top)
        this.printTree(root.right, space + levelSpace, levelSpace);

        // print current node
        console.log(" ".repeat(space) + root.val);

        // then left subtree
        this.printTree(root.left, space + levelSpace, levelSpace);
    }
}

let arr = [1, 2, 3, null, 5, null, 4];
let b = new BinaryTree();
let root = b.buildByLevelOrder(arr);

b.printTree(root);
