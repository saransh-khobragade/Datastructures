package pattern.tree;

import syntax.TreeNode;
import syntax.Trees;




public class KthSmallestIntegerinBST {
    public static void main(String[] args) {
        Integer[] input = {5,3,6,2,4,null,null,1};
        TreeNode root = Trees.build(input);
        System.out.println(kthSmallest(root,3));

    }
    public static int kthSmallest(TreeNode root, int k) {

    }
    public static int inOrderMin(TreeNode root){
        if(root == null){
            return null;
        }else{
            inOrderMin(root.left);
            System.out.println(root.left);
            inOrderMin(root.right);
        }
    }
}
