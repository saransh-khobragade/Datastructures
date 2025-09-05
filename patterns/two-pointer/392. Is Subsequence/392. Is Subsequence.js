// 392. Is Subsequence
// LeetCode Problem: https://leetcode.com/problems/is-subsequence/

class Solution {
    isSubsequence(s, t) {
        /**
         * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
         * A subsequence of a string is a new string that is formed from the original string by deleting some 
         * (can be none) of the characters without disturbing the relative positions of the remaining characters.
         */
        let i = 0;
        let j = 0;

        while (i < s.length && j < t.length) {
            if (s[i] === t[j]) {
                i++;
                j++;
            } else {
                j++;
            }
        }
        if (i === s.length) {
            return true;
        } else {
            return false;
        }
    }
}

const s = new Solution();
console.log(s.isSubsequence("abc", "ahbgdc")); // true

// Time complexity: O(n)
// Space complexity: O(1)