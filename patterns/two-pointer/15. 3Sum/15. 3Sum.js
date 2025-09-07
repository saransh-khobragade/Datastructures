/**
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.*/
var threeSum = function (nums) {
    const result = [];
    if (!nums || nums.length < 3) return result;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // skip duplicate first elements
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        const target = -nums[i];

        while (left < right) {
            const sum = nums[left] + nums[right];

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                // found a triplet
                result.push([nums[i], nums[left], nums[right]]);

                // skip duplicates for left and right
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // move both pointers after processing duplicates
                left++;
                right--;
            }
        }
    }

    return result;
};

// test
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// expected: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]

console.log(
    threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10])
);
// expected: [[-10,5,5],[-5,0,5],[-4,2,2],[-3,-2,5],[-3,1,2],[-2,0,2]]
