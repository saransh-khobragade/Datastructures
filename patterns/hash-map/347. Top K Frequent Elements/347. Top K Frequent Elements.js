// 347. Top K Frequent Elements
// LeetCode Problem: https://leetcode.com/problems/top-k-frequent-elements/

class Solution {
    topKFrequent(nums, k) {
        /**
         * Given an integer array nums and an integer k, return the k most frequent elements. 
         * You may return the answer in any order.
         */
        const dic = {};

        for (let x of nums) {
            if (x in dic) {
                dic[x] += 1;
            } else {
                dic[x] = 1;
            }
        }

        // Sort dictionary by frequency (most frequent first)
        const out = Object.entries(dic).sort((a, b) => b[1] - a[1]);

        const result = [];
        for (let item of out) {
            result.push(parseInt(item[0]));
        }

        return result.slice(0, k);
    }
}

const s = new Solution();
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(s.topKFrequent(nums, k)); // [1, 2]

/*
Time complexity: O(N log N)
Space complexity: O(N)
where N is the length of the input array.
*/