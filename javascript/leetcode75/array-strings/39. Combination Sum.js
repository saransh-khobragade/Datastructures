// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
class Solution {
    combinationSum(candidates, target) {
        let sol = [];
        
        function backtrack(comb, start) {
            if (comb.reduce((a, b) => a + b, 0) > target) {
                return comb.slice(0, -1);
            } else if (comb.reduce((a, b) => a + b, 0) == target) {
                sol.push([...comb]);
                return comb.slice(0, -1);
            } else {
                for (let i = start; i < candidates.length; i++) {
                    comb.push(candidates[i]);
                    comb = backtrack(comb, i);
                }
                return comb.slice(0, -1);
            }
        }
        
        backtrack([], 0);
        return sol;
    }
}

let s = new Solution();
console.log(s.combinationSum([2, 3, 6, 7], 7)); 