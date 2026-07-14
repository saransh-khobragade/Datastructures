package pattern.tree;

import syntax.TreeNode;
import syntax.Trees;


public class KthSmallestIntegerinBST {

    int count = 0;
    int result = 0;

    public int kthSmallest(TreeNode root, int k) {
        inOrderMin(root,k);
        return result;
    }
    public void inOrderMin(TreeNode root, int k) {
        if (root == null) {
            return;
        } else {

            inOrderMin(root.left, k);


            count++;
            if (count == k) {
                result = root.val;
                return;
            }

            inOrderMin(root.right, k);
        }
    }
}

class Call{
    public static void main(String[] args) {
        Integer[] input = {5, 3, 6, 2, 4, null, null, 1};
        TreeNode root = Trees.build(input);
        KthSmallestIntegerinBST s = new KthSmallestIntegerinBST();
        System.out.println(s.kthSmallest(root, 3));
    }
}
