/**
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 */

function longestOnes(nums, k) {
    let left = 0;
    let right = 0;
    let zeros = 0;
    let maxCount = 0;

    while (right < nums.length) {
        if (nums[right] == 0) {
            zeros += 1;
        }
        while (zeros > k) {
            if (nums[left] == 0) {
                zeros -= 1;
            }
            left += 1;
        }
        right += 1;
        maxCount = Math.max(maxCount, right - left);
    }
    return maxCount;
}
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

// Time complexity : O(n)
// Space complexity : O(1)
// Youtube : https://youtu.be/Xxpf6ahpFI8
