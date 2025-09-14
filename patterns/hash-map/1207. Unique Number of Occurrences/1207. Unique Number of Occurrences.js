/**
 * Given an array of integers arr, return true if the number of occurrences
 * of each value in the array is unique or false otherwise.
 */
class Solution {
    uniqueOccurrences(arr) {
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
// Youtube : https://youtu.be/i7V4JItSL6w
