/*
https://leetcode.com/problems/valid-parentheses/description/
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
The input string s is valid if and only if:
Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

* */
package pattern.stack;

import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

class ValidParentheses {
    public static void main(String[] args) {
        ValidParentheses s = new ValidParentheses();
        System.out.println(s.isValid("]"));
    }
    public boolean isValid(String s) {
        Stack<Character> st = new Stack<>();

        for(Character c : s.toCharArray()){
            if(c == '(' || c == '{' || c == '['){
                st.push(c);
            }else{
                if(!st.isEmpty() && c == ')' && st.peek() == '('){
                    st.pop();
                }else if(!st.isEmpty() && c == '}' && st.peek() == '{'){
                    st.pop();
                }else if(!st.isEmpty() && c == ']' && st.peek() == '['){
                    st.pop();
                }else{
                    return false;
                }
            }
        }
        return st.size() == 0;
    }
}
