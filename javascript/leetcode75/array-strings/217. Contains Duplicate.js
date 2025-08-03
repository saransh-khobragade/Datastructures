class Solution {
    containsDuplicate(nums) {
        let frequency = new Set();
        for (let x of nums) {
            if (frequency.has(x)) {
                return true;
            } else {
                frequency.add(x);
            }
        }
        
        return false;
    }
}

let nums = [1, 2, 3, 4];
let a = new Solution();

console.log(a.containsDuplicate(nums));

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Input: nums = [1,2,3,1]
Output: true
*/ 