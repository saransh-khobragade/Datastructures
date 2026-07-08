package pattern.tree;

import syntax.TreeNode;
import syntax.Trees;

import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

public class BinaryTreeLevelOrderTraversal {
    public static void main(String[] args) {

        Integer[] input = {1, 2, 3, 4, 5, 6, 7};
        TreeNode root = Trees.build(input);
        System.out.println(levelOrder(root));
    }

    public static List<List<Integer>> levelOrder(TreeNode root) {


        ArrayList level = new ArrayList<Integer>();
        Queue<TreeNode> queue = new Queue<TreeNode>();

        queue.offer(root);
        int size = queue.size();

        for (int i = 0; i < size; i++) {
            if (root.left != null) {
                queue.offer(root.left);
            }
            if (root.right != null) {
                queue.offer(root.right);
            }
        }


    }
}
