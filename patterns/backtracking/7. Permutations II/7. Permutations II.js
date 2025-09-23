/**
 * Given a collection of numbers, nums, that might contain duplicates,
 * return all the possible unique permutations in any order.
 */

function permuteUnique(nums) {
    const result = [];

    function backtrack(start) {
        if (start === nums.length) {
            result.push(nums.slice());
            return;
        }

        const seen = new Set();

        for (let i = start; i < nums.length; i++) {
            //to avoid duplicate pairs
            if (!seen.has(nums[i])) {
                seen.add(nums[i]);

                [nums[i], nums[start]] = [nums[start], nums[i]];
                backtrack(start + 1);
                [nums[i], nums[start]] = [nums[start], nums[i]];
            }
        }
    }

    backtrack(0);
    return result;
}

// Example usage
const nums = [1, 1, 2];
console.log(permuteUnique(nums)); // [[1,1,2],[1,2,1],[2,1,1]]

/*
Time complexity: O(n! * n)
Space complexity: O(n)
where n is the length of the input array.
*/
