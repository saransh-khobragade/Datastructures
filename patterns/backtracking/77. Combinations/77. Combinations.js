/**
 * Given two integers n and k, return all possible combinations of k numbers
 * chosen from the range [1, n].
 *
 * You may return the answer in any order.
 */

function combine(n, k) {
    const input = [];
    const result = [];
    for (let i = 1; i <= n; i++) {
        input.push(i);
    }
    function backtrack(start, arr) {
        if (arr.length == k) {
            result.push(arr.slice());
            return;
        } else {
            for (let i = start; i < input.length; i++) {
                arr.push(input[i]);
                backtrack(i + 1, arr);
                arr.pop();
            }
        }
    }
    backtrack(0, []);
    return result;
}

console.log(combine(3, 2)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

/*
Time complexity: O(C(n,k) * k)
Space complexity: O(k)
where C(n,k) is the binomial coefficient.
*/
