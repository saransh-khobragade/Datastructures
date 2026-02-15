/**
Given a binary array nums, you should delete one element from it.
Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.*/
const longestSubarray = function (nums) {
    let left = 0;
    let right = 0;
    let zeros = 0;
    let maxCount = 0;

    while (right < nums.length) {
        if (nums[right] == 0) {
            zeros += 1;
        }
        while (zeros > 1) {
            if (nums[left] == 0) {
                zeros -= 1;
            }
            left += 1;
        }
        right += 1;
        maxCount = Math.max(maxCount, right - left);
    }
    return maxCount - 1;
};
console.log(longestSubarray([0, 1, 1, 1, 0, 0, 1, 1, 0, 1])); // 3

// Time complexity : O(n)
// Space complexity : O(1)
// Youtube : https://youtu.be/R9fMSiEs3OM
