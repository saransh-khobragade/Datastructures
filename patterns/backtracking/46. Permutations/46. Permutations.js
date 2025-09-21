/**
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 */

function permute(nums) {
    // const result = [];
    function backtrack(start) {
        if (start == nums.length) {
            // result.push(nums.slice());
            console.log(nums);
        } else {
            for (let i = start; i < nums.length; i++) {
                [nums[i], nums[start]] = [nums[start], nums[i]];
                backtrack(start + 1);
                [nums[i], nums[start]] = [nums[start], nums[i]];
            }
        }
        return;
    }
    backtrack(0);
    // return result;
}

// Example usage
const nums = [1, 2, 3];
console.log(permute(nums)); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/*
start = 0
i = 0(swap)                     [1,2,3]
    start = 1
    i = 1(swap)                 [1,2,3]
        start = 2
        i = 2(swap)             [1,2,3] 
            start = 3           [1,2,3] -> print()  [1,2,3]
        i = 2(reverse)          [1,2,3]
    i = 1(reverse)              [1,2,3]
    
    i = 2(swap)                 [1,3,2]
        start = 3               [1,3,2] -> print()  [1,3,2]
    i = 2(reverse)              [1,2,3]
i = 0(reverse)

i = 1(swap)                     [2,1,3]
    start = 1
    i = 1(swap)                 [2,1,3]
        start = 2
            i = 2(swap) 
                start = 3       [2,1,3] -> print()  [2,1,3] 
            i = 2(reverse)
    i = 1(reverse)              [2,1,3]
    i = 2(swap)                 [2,3,1]
        start = 3               [2,3,1] -> print()  [2,3,1]
    i = 2(reverse)              [2,1,3]
i = 1(reverse)                  [1,2,3]

i = 2(swap)                     [3,2,1]
    start = 1
    i = 1(swap)                 [3,2,1]
        start = 2
        i = 2(swap)             [3,2,1]
            start = 3           [3,2,1] -> print()  [3,2,1]
        i = 2(reverse)          [3,2,1]
    i = 1(reverse)              [3,2,1]
    i = 2(swap)                 [3,1,2]
        start = 3               [3,1,2] -> print()  [3,1,2]
    i = 2(reverse)              [3,2,1]
i = 2(reverse)                  [1,2,3]

*/
// Time Complexity : O(n · n!)
// Space Complexity : O(n)
