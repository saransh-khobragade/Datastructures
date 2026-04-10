package pattern.tree;

import syntax.TreeNode;
import syntax.Trees;

public class InvertBinaryTree {
    public static void main(String[] args) {
        Integer[] arr = {1,2,3,4,5,6,7};

        TreeNode root = Trees.build(arr);
        TreeNode result = invertTree(root);
        Trees.printTree(result);

    }
    public static TreeNode invertTree(TreeNode root) {
        if(root == null){
            return null;
        }else{
            TreeNode save = root.left;
            root.left = root.right;
            root.right = save;

            invertTree(root.left);
            invertTree(root.right);
        }
        return root;
    }
}
