/**
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.  
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
 */
var maxVowels = function (s, k) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    let count = 0;
    let maxCount = 0;

    j = 0;
    while (j < k) {
        if (vowels.has(s[j])) {
            count += 1;
            maxCount = Math.max(maxCount, count);
        }
        j += 1;
    }

    while (j < s.length) {
        if (vowels.has(s[j - k])) {
            count -= 1;
        }
        if (vowels.has(s[j])) {
            count += 1;
            maxCount = Math.max(maxCount, count);
        }
        j += 1;
    }
    return maxCount;
};
console.log(maxVowels("abciiidef", 3));

// Time complexity : O(n)
// Space complexity : O(1)
// Youtube : https://youtu.be/dsvxxtlI4lg
