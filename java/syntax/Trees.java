package syntax;

import java.util.LinkedList;
import java.util.Queue;

public class Trees {
    public static TreeNode build(Integer[] input) {

        Queue<TreeNode> queue = new LinkedList<>();

        TreeNode root = new TreeNode(input[0], null, null);

        queue.add(root);

        int i = 1;

        while (!queue.isEmpty() && i < input.length) {

            TreeNode curr = queue.remove();
            if (input[i] != null) {
                curr.left = new TreeNode(input[i], null, null);
                queue.add(curr.left);
            }
            i++;


            if (i < input.length && input[i] != null) {
                curr.right = new TreeNode(input[i], null, null);
                queue.add(curr.right);
            }
            i++;

        }

        return root;
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
        Integer[] input = {1,2,3,null,null,4};
        Trees.build(input);
    }
}


