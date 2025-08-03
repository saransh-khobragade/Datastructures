/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
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

// Test case
let nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums)); // false

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Input: nums = [1,2,3,1]
Output: true
*/ 