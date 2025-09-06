/**
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * You can return the answer in any order.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

class Solution {
    twoSum(nums, target) {
        const seen = {};
        for (let i = 0; i < nums.length; i++) {
            if (target - nums[i] in seen) {
                return [seen[target - nums[i]], i];
            } else {
                seen[v] = i;
            }
        }
    }
}

const s = new Solution();
console.log(s.twoSum([2, 7, 11, 15], 9)); // [0, 1]

// 0    1   2   3
// 2    7   11  15
// 7    2   -3  -6

/*
Time complexity: O(n)
Space complexity: O(n)
where n is the length of the input array.
*/
