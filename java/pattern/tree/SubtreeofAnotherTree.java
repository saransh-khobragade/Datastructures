package pattern.tree;

import syntax.TreeNode;
import syntax.Trees;

public class SubtreeofAnotherTree {
    public static void main(String[] args) {
        Integer[] p1 = {1,2,3,4,5,null,null,6};
        Integer[] p2 = {2,4,5};

        TreeNode root = Trees.build(p1);
        TreeNode subRoot = Trees.build(p2);

        System.out.println(isSubtree(root,subRoot));
    }
    public static boolean isSameTree(TreeNode p,TreeNode q){
        if(p == null || q == null){
            return p==q;
        }else{
            return p.val == q.val &&
                    isSameTree(p.left,q.left) &&
                    isSameTree(p.right,q.right);
        }
    }
    public static boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if(root == null) return false; // if root is null than to which subroot will get compare. We are not testing root in main function not subroot.

        if(isSameTree(root,subRoot)){
            return true;
        }else{
            return isSubtree(root.left,subRoot) ||
                    isSubtree(root.right,subRoot);
        }
    }
}
