/*
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
The input string s is valid if and only if:
Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

* */
package pattern.stack;
class ValidParentheses {
    public static void main(String[] args) {
        ValidParentheses s = new ValidParentheses();
        s.isValid("abc");
    }
    public boolean isValid(String s) {
        System.out.println(s);
        return true;
    }
}
