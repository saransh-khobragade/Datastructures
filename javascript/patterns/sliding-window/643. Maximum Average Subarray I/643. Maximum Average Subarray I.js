/**
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum average value
 * and return this value.
 */

class Solution {
    findMaxAverage(nums, k) {
        let start = 0;
        let end = 0;
        let currSum = 0;
        let maxAvg = -Infinity;
        let avg = 0;

        //create window
        while (end - start < k) {
            currSum += nums[end];
            avg = currSum / k;
            end++;
        }
        maxAvg = Math.max(maxAvg, avg);

        //shift window
        while (end < nums.length) {
            currSum -= nums[start];
            currSum += nums[end];
            avg = currSum / k;
            maxAvg = Math.max(maxAvg, avg);
            start++;
            end++;
        }
        return maxAvg;
    }
}

const s = new Solution();
console.log(s.findMaxAverage([0, 1, 1, 3, 3], 4)); // 2.0

// Time complexity: O(n)
// Space complexity: O(1)
// Youtube : https://youtu.be/Xxpf6ahpFI8
