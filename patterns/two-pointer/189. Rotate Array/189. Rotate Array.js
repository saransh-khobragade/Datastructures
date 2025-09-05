// 189. Rotate Array
// LeetCode Problem: https://leetcode.com/problems/rotate-array/

class Solution {
    rotate(nums, k) {
        /**
         * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
         */
        k = k % nums.length;
        if (k === 0) {
            return;
        }

        if (k > nums.length - 1) {
            console.log(nums);
            return;
        }
        let start = 0;
        let end = nums.length - 1;

        // reverse complete array
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }

        // reverse 0 to k
        start = 0;
        end = k - 1;
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }

        // reverse k to n-1
        start = k;
        end = nums.length - 1;
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
        return nums;
    }
}

const s = new Solution();
console.log(s.rotate([1, 2, 3, 4, 5, 6], 2)); // [5, 6, 1, 2, 3, 4]

// Time complexity: O(n)
// Space complexity: O(1)