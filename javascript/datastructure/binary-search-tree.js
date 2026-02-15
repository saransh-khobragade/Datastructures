// Binary Search Tree Node
// class BSTNode {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// // Binary Search Tree Class
// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(data) {
//         const newNode = new BSTNode(data);
//         if (!this.root) {
//             this.root = newNode;
//             return;
//         }
//         this.insertNode(this.root, newNode);
//     }

//     insertNode(node, newNode) {
//         if (newNode.data < node.data) {
//             if (!node.left) {
//                 node.left = newNode;
//             } else {
//                 this.insertNode(node.left, newNode);
//             }
//         } else {
//             if (!node.right) {
//                 node.right = newNode;
//             } else {
//                 this.insertNode(node.right, newNode);
//             }
//         }
//     }

//     search(data) {
//         return this.searchNode(this.root, data);
//     }

//     searchNode(node, data) {
//         if (!node) return null;
//         if (data < node.data) {
//             return this.searchNode(node.left, data);
//         } else if (data > node.data) {
//             return this.searchNode(node.right, data);
//         } else {
//             return node;
//         }
//     }

//     remove(data) {
//         this.root = this.removeNode(this.root, data);
//     }

//     removeNode(node, data) {
//         if (!node) return null;
//         if (data < node.data) {
//             node.left = this.removeNode(node.left, data);
//         } else if (data > node.data) {
//             node.right = this.removeNode(node.right, data);
//         } else {
//             if (!node.left && !node.right) {
//                 return null;
//             } else if (!node.left) {
//                 return node.right;
//             } else if (!node.right) {
//                 return node.left;
//             } else {
//                 const minNode = this.findMin(node.right);
//                 node.data = minNode.data;
//                 node.right = this.removeNode(node.right, minNode.data);
//             }
//         }
//         return node;
//     }

//     findMin(node) {
//         while (node.left) {
//             node = node.left;
//         }
//         return node;
//     }

//     // BST Traversals
//     inOrderTraversal(node = this.root, result = []) {
//         if (node) {
//             this.inOrderTraversal(node.left, result);
//             result.push(node.data);
//             this.inOrderTraversal(node.right, result);
//         }
//         return result;
//     }

//     preOrderTraversal(node = this.root, result = []) {
//         if (node) {
//             result.push(node.data);
//             this.preOrderTraversal(node.left, result);
//             this.preOrderTraversal(node.right, result);
//         }
//         return result;
//     }

//     postOrderTraversal(node = this.root, result = []) {
//         if (node) {
//             this.postOrderTraversal(node.left, result);
//             this.postOrderTraversal(node.right, result);
//             result.push(node.data);
//         }
//         return result;
//     }
// }

// // Simple Binary Tree Traversal Functions
// function preorder(tree) {
//     if (tree) {
//         console.log(tree.data);
//         preorder(tree.left);
//         preorder(tree.right);
//     }
// }

// function inorder(tree) {
//     if (tree) {
//         inorder(tree.left);
//         console.log(tree.data);
//         inorder(tree.right);
//     }
// }

// function postorder(tree) {
//     if (tree) {
//         postorder(tree.left);
//         postorder(tree.right);
//         console.log(tree.data);
//     }
// }

// module.exports = {
//     BinaryTreeNode,
//     BinarySearchTree,
//     BSTNode,
//     preorder,
//     inorder,
//     postorder,
// };
