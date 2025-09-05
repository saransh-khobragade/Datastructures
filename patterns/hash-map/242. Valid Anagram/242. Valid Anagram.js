// 242. Valid Anagram
// LeetCode Problem: https://leetcode.com/problems/valid-anagram/

class Solution {
    isAnagram(s, t) {
        /**
         * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
         * 
         * An Anagram is a word or phrase formed by rearranging the letters of a different 
         * word or phrase, typically using all the original letters exactly once.
         */
        s = s.split('');
        t = t.split('');

        if (s.length === t.length) {
            for (let x of s) {
                if (!t.includes(x)) {
                    return false;
                } else {
                    t.splice(t.indexOf(x), 1);
                }
            }
            return true;
        } else {
            return false;
        }
    }
}

const s = new Solution();
console.log(s.isAnagram("aacc", "ccac")); // false

/*
Time complexity: O(N)
Space complexity: O(1) - since we use fixed size array for character counting
where N is the length of the input strings.
*/