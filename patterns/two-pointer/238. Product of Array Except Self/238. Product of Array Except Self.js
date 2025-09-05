// 238. Product of Array Except Self
// LeetCode Problem: https://leetcode.com/problems/product-of-array-except-self/

class Solution {
    productExceptSelf(nums) {
        /**
         * Given an integer array nums, return an array answer such that answer[i] is equal to the product 
         * of all the elements of nums except nums[i].
         * 
         * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
         * You must write an algorithm that runs in O(n) time and without using the division operation.
         */
        const leftArr = new Array(nums.length).fill(1);
        const rightArr = new Array(nums.length).fill(1);

        let left = 1;
        for (let i = 0; i < nums.length - 1; i++) {
            leftArr[i] = nums[i] * left;
            left *= nums[i];
        }
        
        let right = 1;
        
        for (let i = nums.length - 1; i >= 0; i--) {
            rightArr[i] = leftArr[i - 1] * right;
            right *= nums[i];
        }

        return rightArr;
    }
}

const s = new Solution();
console.log(s.productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]

// Time complexity: O(n)
// Space complexity: O(n)