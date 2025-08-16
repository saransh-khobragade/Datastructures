// Binary Tree and Binary Search Tree implementation in Java
// Includes both simple binary tree and BST with traversal methods

import java.util.*;

// Simple Binary Tree Node
class BinaryTreeNode {
    private int data;
    private BinaryTreeNode left;
    private BinaryTreeNode right;
    
    public BinaryTreeNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    
    public void insertLeft(int data) {
        if (this.left == null) {
            this.left = new BinaryTreeNode(data);
        } else {
            BinaryTreeNode temp = new BinaryTreeNode(data);
            temp.left = this.left;
            this.left = temp;
        }
    }
    
    public void insertRight(int data) {
        if (this.right == null) {
            this.right = new BinaryTreeNode(data);
        } else {
            BinaryTreeNode temp = new BinaryTreeNode(data);
            temp.right = this.right;
            this.right = temp;
        }
    }
    
    public BinaryTreeNode getRight() {
        return this.right;
    }
    
    public BinaryTreeNode getLeft() {
        return this.left;
    }
    
    public int getData() {
        return this.data;
    }
}

// Binary Search Tree Node
class BSTNode {
    int data;
    BSTNode left;
    BSTNode right;
    
    public BSTNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree Class
class BinarySearchTree {
    private BSTNode root;
    
    public BinarySearchTree() {
        this.root = null;
    }
    
    public void insert(int data) {
        BSTNode newNode = new BSTNode(data);
        if (root == null) {
            root = newNode;
            return;
        }
        insertNode(root, newNode);
    }
    
    private void insertNode(BSTNode node, BSTNode newNode) {
        if (newNode.data < node.data) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }
    
    public BSTNode search(int data) {
        return searchNode(root, data);
    }
    
    private BSTNode searchNode(BSTNode node, int data) {
        if (node == null) return null;
        if (data < node.data) {
            return searchNode(node.left, data);
        } else if (data > node.data) {
            return searchNode(node.right, data);
        } else {
            return node;
        }
    }
    
    public void remove(int data) {
        root = removeNode(root, data);
    }
    
    private BSTNode removeNode(BSTNode node, int data) {
        if (node == null) return null;
        if (data < node.data) {
            node.left = removeNode(node.left, data);
        } else if (data > node.data) {
            node.right = removeNode(node.right, data);
        } else {
            if (node.left == null && node.right == null) {
                return null;
            } else if (node.left == null) {
                return node.right;
            } else if (node.right == null) {
                return node.left;
            } else {
                BSTNode minNode = findMin(node.right);
                node.data = minNode.data;
                node.right = removeNode(node.right, minNode.data);
            }
        }
        return node;
    }
    
    private BSTNode findMin(BSTNode node) {
        while (node.left != null) {
            node = node.left;
        }
        return node;
    }
    
    // BST Traversals
    public List<Integer> inOrderTraversal() {
        List<Integer> result = new ArrayList<>();
        inOrderTraversal(root, result);
        return result;
    }
    
    private void inOrderTraversal(BSTNode node, List<Integer> result) {
        if (node != null) {
            inOrderTraversal(node.left, result);
            result.add(node.data);
            inOrderTraversal(node.right, result);
        }
    }
    
    public List<Integer> preOrderTraversal() {
        List<Integer> result = new ArrayList<>();
        preOrderTraversal(root, result);
        return result;
    }
    
    private void preOrderTraversal(BSTNode node, List<Integer> result) {
        if (node != null) {
            result.add(node.data);
            preOrderTraversal(node.left, result);
            preOrderTraversal(node.right, result);
        }
    }
    
    public List<Integer> postOrderTraversal() {
        List<Integer> result = new ArrayList<>();
        postOrderTraversal(root, result);
        return result;
    }
    
    private void postOrderTraversal(BSTNode node, List<Integer> result) {
        if (node != null) {
            postOrderTraversal(node.left, result);
            postOrderTraversal(node.right, result);
            result.add(node.data);
        }
    }
}

// Simple Binary Tree Traversal Functions
class BinaryTreeTraversals {
    public static void preorder(BinaryTreeNode tree) {
        if (tree != null) {
            System.out.println(tree.getData());
            preorder(tree.getLeft());
            preorder(tree.getRight());
        }
    }
    
    public static void inorder(BinaryTreeNode tree) {
        if (tree != null) {
            inorder(tree.getLeft());
            System.out.println(tree.getData());
            inorder(tree.getRight());
        }
    }
    
    public static void postorder(BinaryTreeNode tree) {
        if (tree != null) {
            postorder(tree.getLeft());
            postorder(tree.getRight());
            System.out.println(tree.getData());
        }
    }
}

// Main class for testing
public class BinaryTree {
    public static void main(String[] args) {
        // Test Binary Search Tree
        BinarySearchTree bst = new BinarySearchTree();
        bst.insert(50);
        bst.insert(30);
        bst.insert(70);
        bst.insert(20);
        bst.insert(40);
        bst.insert(60);
        bst.insert(80);
        
        System.out.println("In-order traversal: " + bst.inOrderTraversal());
        System.out.println("Pre-order traversal: " + bst.preOrderTraversal());
        System.out.println("Post-order traversal: " + bst.postOrderTraversal());
        
        // Test simple binary tree
        BinaryTreeNode root = new BinaryTreeNode(1);
        root.insertLeft(2);
        root.insertRight(3);
        root.getLeft().insertLeft(4);
        root.getLeft().insertRight(5);
        
        System.out.println("\nSimple Binary Tree Pre-order:");
        BinaryTreeTraversals.preorder(root);
    }
} 