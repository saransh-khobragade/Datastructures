/**
 * You are given an integer array nums and an integer k.
 * In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
 * Return the maximum number of operations you can perform on the array.
 */

class Solution {
    maxOperations(nums, k) {
        const map = {};
        let ops = 0;

        for (let x of nums) {
            if (k - x in map && map[k - x] > 0) {
                ops++;
                map[k - x]--;
            } else {
                map[x] = (map[x] || 0) + 1;
            }
        }
        return ops;
    }
}

const s = new Solution();
console.log(s.maxOperations([1, 2, 3, 4, 5], 5)); // 2

// Time complexity: O(n)
// Space complexity: O(n)
