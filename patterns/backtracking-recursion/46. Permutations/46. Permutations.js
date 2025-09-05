// 46. Permutations
// LeetCode Problem: https://leetcode.com/problems/permutations/

function permute(nums) {
    /**
     * Given an array nums of distinct integers, return all the possible permutations. 
     * You can return the answer in any order.
     */
    const result = [];
    
    function backtrack(currentPermutation) {
        if (currentPermutation.length === nums.length) {
            result.push([...currentPermutation]);
            return;
        }
        
        for (let num of nums) {
            if (!currentPermutation.includes(num)) {
                currentPermutation.push(num);
                backtrack(currentPermutation);
                currentPermutation.pop();
            }
        }
    }
    
    backtrack([]);
    return result;
}

// Example usage
const nums = [1, 2, 3];
console.log(permute(nums)); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]