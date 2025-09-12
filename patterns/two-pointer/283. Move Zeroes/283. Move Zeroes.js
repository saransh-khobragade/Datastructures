/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order
 * of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 */
class Solution {
    moveZeroes(nums) {
        let curr = 0;
        // shift all no zeros to left, and count how many are there, because thats many will be zero at the end
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                nums[curr] = nums[i];
                curr++;
            }
        }
        // add zeros at the end
        for (let j = curr; j < nums.length; j++) {
            nums[j] = 0;
        }
        return nums;
    }
}

const s = new Solution();
console.log(s.moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]

// Time complexity: O(n)
// Space complexity: O(1)
// Youtube : https://youtu.be/ssRZ5VH6ACM
