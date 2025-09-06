/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different
 * word or phrase, typically using all the original letters exactly once.
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;

    hmap1 = {};
    hmap2 = {};
    for (let i = 0; i < s.length; i++) {
        if (hmap1[s[i]]) {
            hmap1[s[i]] = hmap1[s[i]] + 1;
        } else {
            hmap1[s[i]] = 1;
        }
        if (hmap2[t[i]]) {
            hmap2[t[i]] = hmap2[t[i]] + 1;
        } else {
            hmap2[t[i]] = 1;
        }
    }
    for (x in hmap1) {
        if (hmap1[x] !== hmap2[x]) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram("aacc", "ccac")); // false

/*
Time complexity: O(N)
Space complexity: O(1) - since we use fixed size array for character counting
where N is the length of the input strings.
*/
