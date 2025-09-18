// 39. Combination Sum
// LeetCode Problem: https://leetcode.com/problems/combination-sum/

function combinationSum(candidates, target) {
    /**
     * Given an array of distinct integers candidates and a target integer target, 
     * return a list of all unique combinations of candidates where the chosen numbers 
     * sum to target. You may return the combinations in any order.
     * 
     * The same number may be chosen from candidates an unlimited number of times.
     */
    const result = [];
    
    function backtrack(start, currentCombination, remainingTarget) {
        if (remainingTarget === 0) {
            result.push([...currentCombination]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] <= remainingTarget) {
                currentCombination.push(candidates[i]);
                backtrack(i, currentCombination, remainingTarget - candidates[i]);
                currentCombination.pop();
            }
        }
    }
    
    backtrack(0, [], target);
    return result;
}

// Example usage
const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target)); // [[2, 2, 3], [7]]