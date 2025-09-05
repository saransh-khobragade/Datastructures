/**
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.  
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
 */
var maxVowels = function (s, k) {
    vowels = ["a", "e", "i", "o", "u"];
    let i = 0;
    let j = 0;
    let count = 0;
    const seen = Set();

    while (j < s.length) {
        if (j < k) {
            if (seen.has()) j += 1;
        } else {
            i += 1;
            j += 1;
        }
    }
};
console.log(maxVowels("abciiidef", 3));
