/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
Input: s = "IceCreAm"
Output: "AceCreIm"
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".
*/

class Solution {
    reverseVowels(s) {
        let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        let str = s.split('');
        let start = 0;
        let end = s.length - 1;
        while (start < end) {
            if (vowels.includes(s[start]) && vowels.includes(s[end])) {
                [str[start], str[end]] = [str[end], str[start]];
                start += 1;
                end -= 1;
            } else if (!vowels.includes(str[start])) {
                start += 1;
            } else if (!vowels.includes(str[end])) {
                end -= 1;
            }
        }

        return str.join('');
    }
}

let s = new Solution();
console.log(s.reverseVowels("IceCreAm"));

/*
Time complexity: O(N)
Space complexity: O(N)
where N is the length of the input string.
*/ 