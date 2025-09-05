// 217. Contains Duplicate
// LeetCode Problem: https://leetcode.com/problems/contains-duplicate/

class Solution {
    containsDuplicate(nums) {
        /**
         * Given an integer array nums, return true if any value appears at least twice 
         * in the array, and return false if every element is distinct.
         */
        const frequency = new Set();
        for (let x of nums) {
            if (frequency.has(x)) {
                return true;
            } else {
                frequency.add(x);
            }
        }
        return false;
    }
}

const nums = [1, 2, 3, 4];
const a = new Solution();
console.log(a.containsDuplicate(nums)); // false

/*
Time complexity: O(N)
Space complexity: O(N)
where N is the length of the input array.
*/