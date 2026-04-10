package pattern.tree;

import syntax.TreeNode;
import syntax.Trees;

public class SameBinaryTree {
    public static void main(String[] args) {
        Integer[] p1 = {2,4,5,6};
        Integer[] q1 = {2,4,5};

        TreeNode p = Trees.build(p1);
        TreeNode q = Trees.build(q1);

        System.out.println(isSameTree(p, q));
    }

    public static boolean isSameTree(TreeNode p, TreeNode q) {

        if (p == null || q == null) {
            return p == q;
        }
        return  p.val == q.val &&
                isSameTree(p.left, q.left) &&
                isSameTree(p.right, q.right);
    }
}
