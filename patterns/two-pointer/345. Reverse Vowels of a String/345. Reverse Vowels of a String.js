// 345. Reverse Vowels of a String
// LeetCode Problem: https://leetcode.com/problems/reverse-vowels-of-a-string/

class Solution {
    reverseVowels(s) {
        /**
         * Given a string s, reverse only all the vowels in the string and return it.
         * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
         */
        const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        const str = s.split('');
        let start = 0;
        let end = s.length - 1;
        
        while (start < end) {
            if (vowels.includes(s[start]) && vowels.includes(s[end])) {
                [str[start], str[end]] = [str[end], str[start]];
                start++;
                end--;
            } else if (!vowels.includes(str[start])) {
                start++;
            } else if (!vowels.includes(str[end])) {
                end--;
            }
        }

        return str.join('');
    }
}

const s = new Solution();
console.log(s.reverseVowels("IceCreAm")); // "AceCreIm"

/*
Time complexity: O(N)
Space complexity: O(N)
where N is the length of the input string.
*/