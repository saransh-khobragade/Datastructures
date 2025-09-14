/**
 * You are given an integer array nums and an integer k.
 * In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
 * Return the maximum number of operations you can perform on the array.
 */

class Solution {
    maxOperations(nums, k) {
        const hmap = {};
        let ops = 0;

        for (let x of nums) {
            if (k - x in hmap && hmap[k - x] > 0) {
                ops++;
                hmap[k - x] -= 1;
            } else {
                if (x in hmap) {
                    hmap[x] += 1;
                } else {
                    hmap[x] = 1;
                }
            }
        }
        return ops;
    }
}

const s = new Solution();
// console.log(s.maxOperations([1, 2, 3, 4, 5], 5)); // 2
console.log(
    s.maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2)
);
// 2

// Time complexity: O(n)
// Space complexity: O(n)
// Youtube : https://youtu.be/uwGmQ9JHHcU
