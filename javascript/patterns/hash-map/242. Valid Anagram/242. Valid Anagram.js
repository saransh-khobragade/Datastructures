/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different
 * word or phrase, typically using all the original letters exactly once.
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;

    hmap = {};
    for (let x of s) {
        if (hmap[x]) {
            hmap[x] = hmap[x] + 1;
        } else {
            hmap[x] = 1;
        }
    }
    for (let x of t) {
        if (hmap[x]) {
            hmap[x] = hmap[x] - 1;
        }
    }
    let flag = true;
    for (let x in hmap) {
        if (hmap[x] !== 0) {
            return false;
        }
    }
    return flag;
};
console.log(isAnagram("rat", "car")); // false

/*
Time complexity: O(N)
Space complexity: O(1) - since we use fixed size array for character counting
where N is the length of the input strings.
*/
