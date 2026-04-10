package syntax;

import java.util.LinkedList;
import java.util.Queue;

public class Trees {
    public static TreeNode build(int[] input) {

        Queue<TreeNode> queue = new LinkedList<>();

        TreeNode start = new TreeNode(input[0], null, null);

        queue.add(start);

        int i = 1;

        while (!queue.isEmpty() && i < input.length) {

            TreeNode curr = queue.remove();

            curr.left = new TreeNode(input[i++], null, null);
            queue.add(curr.left);


            curr.right = new TreeNode(input[i++], null, null);
            queue.add(curr.right);
        }

        return start;
    }

    public static void printTree(TreeNode root) {
        if (root!=null) {
            Queue<TreeNode> queue = new LinkedList<>();
            queue.add(root);

            while(!queue.isEmpty()){
                TreeNode ele = queue.remove();
                System.out.println(ele.val);
                queue.add(ele.left);
                queue.add(ele.right);
            }
        }
    }


    public static void main(String[] args) {
        int[] input = {1, 2, 3, 4, 5, 6, 7};
        Trees.build(input);
    }
}


