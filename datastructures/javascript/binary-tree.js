class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    buildByLevelOrder(levelOrder) {
        if (!levelOrder || levelOrder.length === 0) return null;

        let root = new TreeNode(levelOrder[0]);
        let queue = [root];
        let i = 1;

        while (i < levelOrder.length) {
            let current = queue.shift();

            // Left child
            if (i < levelOrder.length && levelOrder[i] !== null) {
                current.left = new TreeNode(levelOrder[i]);
                queue.push(current.left);
            }
            i++;

            // Right child
            if (i < levelOrder.length && levelOrder[i] !== null) {
                current.right = new TreeNode(levelOrder[i]);
                queue.push(current.right);
            }
            i++;
        }

        return root;
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
