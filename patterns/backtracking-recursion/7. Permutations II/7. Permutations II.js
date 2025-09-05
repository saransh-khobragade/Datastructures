// 47. Permutations II
// LeetCode Problem: https://leetcode.com/problems/permutations-ii/

function permuteUnique(nums) {
    /**
     * Given a collection of numbers, nums, that might contain duplicates, 
     * return all the possible unique permutations in any order.
     */
    const result = [];
    nums.sort((a, b) => a - b); // Sort to handle duplicates
    
    function backtrack(currentPermutation, used) {
        if (currentPermutation.length === nums.length) {
            result.push([...currentPermutation]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (used[i] || (i > 0 && nums[i] === nums[i-1] && !used[i-1])) {
                continue;
            }
            
            used[i] = true;
            currentPermutation.push(nums[i]);
            backtrack(currentPermutation, used);
            currentPermutation.pop();
            used[i] = false;
        }
    }
    
    backtrack([], new Array(nums.length).fill(false));
    return result;
}

// Example usage
const nums = [1, 1, 2];
console.log(permuteUnique(nums)); // [[1,1,2],[1,2,1],[2,1,1]]

/*
Time complexity: O(n! * n)
Space complexity: O(n)
where n is the length of the input array.
*/