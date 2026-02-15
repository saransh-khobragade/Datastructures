/**
 * Given two 0-indexed integer arrays nums1 and nums2, return a list:
 * answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
 * answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
 * Note that the integers in the lists may be returned in any order.
 */
class Solution {
    findDifference(nums1, nums2) {
        const hmap1 = {};
        const hmap2 = {};

        for (let x of nums1) {
            if (!nums2.includes(x)) {
                hmap1[x] = true;
            }
        }

        for (let y of nums2) {
            if (!nums1.includes(y)) {
                hmap2[y] = true;
            }
        }

        return [Object.keys(hmap1).map(Number), Object.keys(hmap2).map(Number)];
    }
}

const s = new Solution();
console.log(s.findDifference([1, 2, 3], [2, 4, 6])); // [[1,3],[4,6]]

// Time complexity: O(n)
// Space complexity: O(n)
// Youtube : https://youtu.be/nZRVZQjtZXw
