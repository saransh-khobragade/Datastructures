/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    s = s.split('');
    t = t.split('');

    if (s.length === t.length) {
        for (let x of s) {
            let index = t.indexOf(x);
            if (index === -1) {
                return false;
            } else {
                t.splice(index, 1);
            }
        }
        return true;
    } else {
        return false;
    }
}

// Test case
console.log(isAnagram("aacc", "ccac")); // false

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true
*/ 