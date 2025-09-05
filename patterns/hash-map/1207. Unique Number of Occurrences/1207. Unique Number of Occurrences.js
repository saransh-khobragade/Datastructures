// 1207. Unique Number of Occurrences
// LeetCode Problem: https://leetcode.com/problems/unique-number-of-occurrences/

class Solution {
    uniqueOccurrences(arr) {
        /**
         * Given an array of integers arr, return true if the number of occurrences 
         * of each value in the array is unique or false otherwise.
         */
        const hmap = {};
        for (let x of arr) {
            if (x in hmap) {
                hmap[x] = hmap[x] + 1;
            } else {
                hmap[x] = 1;
            }
        }

        const hmapLen = Object.keys(hmap).length;
        const setLen = new Set(Object.values(hmap)).size;

        return hmapLen === setLen;
    }
}

const s = new Solution();
console.log(s.uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true

// Time complexity: O(n)
// Space complexity: O(n)