/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product
 * of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */
class Solution {
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);

        // first pass: res[i] = product of elements to the left of i
        let left = 1;
        for (let i = 0; i < n; i++) {
            res[i] = left;
            left *= nums[i];
        }

        // second pass: multiply by product of elements to the right of i
        let right = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= right;
            right *= nums[i];
        }

        return res;
    }
}

const s = new Solution();
console.log(s.productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]

//nums [1, 2, 3, 4]

//res  [1, 1, 1, 1]    left = 1
//res  [1, 1, 1, 1]    left = 2
//res  [1, 1, 2, 1]    left = 6
//res  [1, 1, 2, 6]

//res  [1, 1, 2, 6]    right = 1
//res  [1, 1, 2, 6]    right = 4
//res  [1, 1, 8, 6]    right = 12
//res  [1, 12, 8, 6]   right = 24
//res  [24,12, 8, 6]

// Time complexity: O(n)
// Space complexity: O(1)
//Youtube : https://youtu.be/5cFDc2nGXuQ
