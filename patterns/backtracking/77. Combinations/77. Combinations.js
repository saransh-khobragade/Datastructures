// 77. Combinations
// LeetCode Problem: https://leetcode.com/problems/combinations/

function combine(n, k) {
    /**
     * Given two integers n and k, return all possible combinations of k numbers 
     * chosen from the range [1, n].
     * 
     * You may return the answer in any order.
     */
    const result = [];
    
    function backtrack(start, currentCombination) {
        if (currentCombination.length === k) {
            result.push([...currentCombination]);
            return;
        }
        
        for (let i = start; i <= n; i++) {
            currentCombination.push(i);
            backtrack(i + 1, currentCombination);
            currentCombination.pop();
        }
    }
    
    backtrack(1, []);
    return result;
}

// Example usage
const n = 4, k = 2;
console.log(combine(n, k)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

/*
Time complexity: O(C(n,k) * k)
Space complexity: O(k)
where C(n,k) is the binomial coefficient.
*/