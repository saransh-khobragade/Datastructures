/*
Given a string s, find the length of the longest substring without duplicate characters.
*/
var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let end = 0;
    let seen = new Set();
    let count = 0;
    while (end < s.length) {
        if (seen.has(s[end])) {
            seen.delete(s[start]);
            start += 1;
        } else {
            seen.add(s[end]);
            end += 1;
        }
        count = Math.max(count, end - start);
    }
    return count;
};
console.log(lengthOfLongestSubstring("abcabcbb"));

// Time complexity : O(n)
// Space complexity : O(n)
// Youtube : https://youtu.be/P89frpj0INY
