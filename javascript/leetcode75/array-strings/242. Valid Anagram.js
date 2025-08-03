class Solution {
    isAnagram(s, t) {
        s = s.split('');
        t = t.split('');

        if (s.length == t.length) {
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

let s = new Solution();
console.log(s.isAnagram("aacc", "ccac"));

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true
*/ 