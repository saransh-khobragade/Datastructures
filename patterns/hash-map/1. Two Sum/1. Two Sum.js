// 1. Two Sum
// LeetCode Problem: https://leetcode.com/problems/two-sum/

class Solution {
    twoSum(nums, target) {
        /**
         * Given an array of integers nums and an integer target, return indices of the 
         * two numbers such that they add up to target.
         * 
         * You may assume that each input would have exactly one solution, and you may 
         * not use the same element twice.
         * 
         * You can return the answer in any order.
         */
        const seen = {};
        for (let i = 0; i < nums.length; i++) {
            const v = nums[i];
            if (target - v in seen) {
                return [seen[target - v], i];
            } else {
                seen[v] = i;
            }
        }
    }
}

const s = new Solution();
console.log(s.twoSum([2, 7, 11, 15], 9)); // [0, 1]

/*
Time complexity: O(n)
Space complexity: O(n)
where n is the length of the input array.
*/