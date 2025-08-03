/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
Input: s = "IceCreAm"
Output: "AceCreIm"
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".
*/

/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let str = s.split('');
    console.log(str);
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        if (vowels.includes(s[start]) && vowels.includes(s[end])) {
            [str[start], str[end]] = [str[end], str[start]];
            start++;
            end--;
        } else if (!vowels.includes(s[start])) {
            start++;
        } else if (!vowels.includes(s[end])) {
            end--;
        }
    }

    return str.join('');
}

// Test case
console.log(reverseVowels("IceCreAm")); 