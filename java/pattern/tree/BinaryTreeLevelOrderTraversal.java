package pattern.tree;

import syntax.TreeNode;
import syntax.Trees;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class BinaryTreeLevelOrderTraversal {
    public static void main(String[] args) {

        Integer[] input = {1, 2, 3, 4, 5, 6, 7};
        TreeNode root = Trees.build(input);
        System.out.println(levelOrder(root));
    }

    public static List<List<Integer>> levelOrder(TreeNode root) {


        if(root == null){
            return new ArrayList<>();
        }

        List<List<Integer>> level = new ArrayList<>();

        Queue<TreeNode> queue = new LinkedList<>();

        queue.offer(root);

        while(!queue.isEmpty()){
            List<Integer> result = new ArrayList<>();
            int size = queue.size();

            for (int i = 0; i < size; i++) {
                TreeNode current = queue.poll();

                if (current.left != null) {
                    queue.offer(current.left);
                }
                if (current.right != null) {
                    queue.offer(current.right);
                }
                result.add(current.val);
            }
            level.add(result);
        }
        return level;
    }
}
