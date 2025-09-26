/*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
*/
var generateParenthesis = function (n) {
    const res = [];
    function backtrack(curr, open, closed) {
        if (curr.length == n * 2) {
            res.push(curr);
            return;
        } else {
            if (open < n) {
                backtrack(curr + "(", open + 1, closed);
            }
            if (closed < open) {
                backtrack(curr + ")", open, closed + 1);
            }
        }
    }
    backtrack("", 0, 0);
    return res;
};
console.log(generateParenthesis(3));
