package pattern.tree;

import syntax.TreeNode;
import syntax.Trees;

public class LowestCommonAncestorinBinarySearchTree {
    public static void main(String[] args) {
        Integer[] arr = {6, 2, 8, 0, 4, 7, 9, null, null, 3, 5};
        TreeNode p = new TreeNode(2, null, null);
        TreeNode q = new TreeNode(4, null, null);

        TreeNode node = Trees.build(arr);
        System.out.println(lowestCommonAncestor(node, p, q).val);
    }

    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) {
            return null;
        } else {
            if (p.val < root.val && q.val < root.val) {
                return lowestCommonAncestor(root.left, p, q);
            }
            if (p.val > root.val && q.val > root.val) {
                return lowestCommonAncestor(root.right, p, q);
            }
            return root;
        }
    }
}
