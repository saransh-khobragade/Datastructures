/**
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character.
You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/
var characterReplacement = function (s, k) {
    let left = 0;
    let right = 0;
    let charFreqArr = Array(26).fill(0);
    let charMax = 0;
    let maxLength = 0;

    while (right < s.length) {
        let rightCharAsciiIndex = s[right].charCodeAt(0) - 65; // A -> 0, B -> 1, C -> 3 (char index)

        charFreqArr[rightCharAsciiIndex] += 1; //freq count index wise
        charMax = Math.max(charMax, ...charFreqArr);

        let window = right - left + 1;
        if (window - charMax > k) {
            let leftCharAsciiIndex = s[left].charCodeAt(0) - 65;

            charFreqArr[leftCharAsciiIndex] -= 1;
            left += 1;
        }
        right += 1;

        maxLength = Math.max(maxLength, right - left);
    }
    return maxLength;
};
console.log(characterReplacement("AABABBA", 1));

// Time complexity : O(n)
// Space complexity : O(1)
// Youtube : https://youtu.be/VFKDK8oF-vM
