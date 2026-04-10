package pattern.tree;

import syntax.TreeNode;
import syntax.Trees;

public class MaximumDepthofBinaryTree {
    public static void main(String[] args) {
        Integer[] arr = {1,2,3,null,null,4};
        TreeNode root = Trees.build(arr);
        int result = maxDepth(root);
        System.out.println(result);
    }

    public static int maxDepthUtil(TreeNode root, int count) {
        if(root == null){
            return count;
        }else{
            int left = 1 + maxDepthUtil(root.left, count);
            int right = 1 + maxDepthUtil(root.right, count);

            if(left > right){
                return left;
            }else{
                return right;
            }
        }
    }

    public static int maxDepth(TreeNode root) {
        if(root == null){
            return 0;
        }else{
            int left = 1 + maxDepth(root.left);
            int right = 1 + maxDepth(root.right);

            if(left > right){
                return left;
            }else{
                return right;
            }
        }
    }
}
