// https://leetcode.com/problems/product-of-array-except-self/
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
class Solution {
    productExceptSelf(nums) {
        let l = nums.length;
        let products = new Array(l).fill(1);

        let left = 1;
        for (let i = 1; i < l; i++) {
            products[i] = nums[i - 1] * left;
            left = products[i];
        }
        
        console.log(products);
        let right = 1;
        for (let i = l - 1; i >= 0; i--) {
            products[i] *= right;
            right *= nums[i];
        }
        
        return products;
    }
}

let s = new Solution();
console.log(s.productExceptSelf([2, 3, 5, 0])); 