class Solution {
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return [i, j];
                }
            }
        }
    }
}

let nums = [3, 2, 4];
let target = 6;
let s = new Solution();
console.log(s.twoSum(nums, target)); 