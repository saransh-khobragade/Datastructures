// https://leetcode.com/problems/combinations/
// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

class Solution {
    combine(L, N) {
        let sol = [];
        
        function backtrack(comb, level, pos, N) {
            if (level == 0) {
                sol.push([...comb]);
                return;
            } else {
                for (let i = pos; i <= N; i++) {
                    comb.push(i);
                    backtrack(comb, level - 1, i + 1, N);
                    comb.pop();
                }
            }
        }
        
        backtrack([], L, 1, N);
        return sol;
    }
}

let s = new Solution();
let N = 3;
let L = 2;
console.log(s.combine(L, N)); 