/**
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left
 * of the index is equal to the sum of all the numbers strictly to the index's right.
 *
 * If the index is on the left edge of the array, then the left sum is 0 because there
 * are no elements to the left. This also applies to the right edge of the array.
 *
 * Return the leftmost pivot index. If no such index exists, return -1.
 */
class Solution {
    pivotIndex(nums) {
        const total = nums.reduce((sum, num) => sum + num, 0);

        let leftSum = 0;
        let rightSum = total;

        for (let i = 0; i < nums.length; i++) {
            rightSum = rightSum - nums[i];
            if (leftSum === rightSum) {
                return i;
            }
            leftSum += nums[i];
        }

        return -1;
    }
}

const s = new Solution();
console.log(s.pivotIndex([1, 7, 3, 6, 5, 6])); // 3

// Time complexity: O(n)
// Space complexity: O(1)
