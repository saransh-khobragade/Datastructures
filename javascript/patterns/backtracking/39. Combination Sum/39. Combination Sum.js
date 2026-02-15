/**
 * Given an array of distinct integers candidates and a target integer target,
 * return a list of all unique combinations of candidates where the chosen numbers
 * sum to target. You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times.
 */

function combinationSum(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b);

    function backtrack(start, arr, target) {
        if (target === 0) {
            result.push([...arr]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            const val = nums[i];
            if (val > target) break;
            arr.push(val);
            backtrack(i, arr, target - val);
            arr.pop();
        }
    }

    backtrack(0, [], target);
    return result;
}

// Example usage
console.log(combinationSum([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]
