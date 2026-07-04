package pattern.tree;

import syntax.TreeNode;
import syntax.Trees;

public class ValidBinarySearchTree {

    public static void main(String[] args) {
        Integer[] input = {2, 1, 3};
        TreeNode root = Trees.build(input);
        System.out.println(isValidBST(root));
    }

    public static boolean isValidBST(TreeNode root) {
        return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    public static boolean validate(TreeNode root, Long min, Long max) {
        if (root == null) {
            return true;
        } else {
            if (root.val > min && root.val < max) {
                return validate(root.left, min, Long.valueOf(root.val)) &&
                        validate(root.right, Long.valueOf(root.val), max);
            } else {
                return false;
            }
        }
    }
}

/*
* Valid Binary Search Tree
*
Given the root of a binary tree, return true if it is a valid binary search tree, otherwise return false.

A valid binary search tree satisfies the following constraints:

The left subtree of every node contains only nodes with keys less than the node's key.
The right subtree of every node contains only nodes with keys greater than the node's key.
Both the left and right subtrees are also binary search trees.
* */
