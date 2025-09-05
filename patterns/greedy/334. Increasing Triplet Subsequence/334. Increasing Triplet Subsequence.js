// 334. Increasing Triplet Subsequence
// LeetCode Problem: https://leetcode.com/problems/increasing-triplet-subsequence/

function increasingTriplet(nums) {
    /**
     * Given an integer array nums, return true if there exists a triple of indices (i, j, k) 
     * such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, 
     * return false.
     */
    if (nums.length < 3) {
        return false;
    }
    
    let first = Infinity;
    let second = Infinity;
    
    for (let num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true;
        }
    }
    
    return false;
}

// Example usage
let nums = [1, 2, 3, 4, 5];
console.log(increasingTriplet(nums)); // true

nums = [5, 4, 3, 2, 1];
console.log(increasingTriplet(nums)); // false