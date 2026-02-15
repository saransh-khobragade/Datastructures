// 1768. Merge Strings Alternately
// LeetCode Problem: https://leetcode.com/problems/merge-strings-alternately/

class Solution {
    mergeAlternately(word1, word2) {
        /**
         * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
         * starting with word1. If a string is longer than the other, append the additional letters onto the end 
         * of the merged string.
         * 
         * Return the merged string.
         */
        let result = "";
        const l = Math.max(word1.length, word2.length);
        for (let i = 0; i < l; i++) {
            if (i < word1.length) {
                result += word1[i];
            }
            if (i < word2.length) {
                result += word2[i];
            }
        }
        return result;
    }
}

const s = new Solution();
console.log(s.mergeAlternately("abc", "pqr")); // "apbqcr"

/*
Time complexity: O(N + M)
Space complexity: O(N + M)
where N and M are the lengths of the input strings.
*/