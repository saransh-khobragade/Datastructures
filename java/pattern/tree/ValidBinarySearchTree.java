package pattern.tree;

import syntax.TreeNode;
import syntax.Trees;

public class ValidBinarySearchTree {
    public static void main(String[] args) {
        Integer[] input = {2,1,3};
        TreeNode root = Trees.build(input);
        System.out.println(isValidBST(root));
    }
    public static TreeNode validate(){
        if(root==null){
            return true;
        }

        b left = isValidBST(root.left);
        TreeNode right = isValidBST(root.left);
    }

    public static boolean isValidBST(TreeNode root) {



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
