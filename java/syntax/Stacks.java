package syntax;

import java.util.Stack;

public class Stacks {
    public static void main(String[] args) {

        Stack<String> s = new Stack<>();
        s.push("a");
        s.push("b");
        s.push("c");
        s.push("d");

        while(!s.isEmpty()){
            System.out.println(s.pop());
        }
    }
}
