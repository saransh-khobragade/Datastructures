// 151. Reverse Words in a String
// LeetCode Problem: https://leetcode.com/problems/reverse-words-in-a-string/

class Solution {
    reverseWords(s) {
        /**
         * Given an input string s, reverse the order of the words.
         * A word is defined as a sequence of non-space characters.
         * The words in s will be separated by at least one space.
         * Return a string of the words in reverse order concatenated by a single space.
         */
        const arr = s.split(" ");
        arr.reverse();
        const filteredArr = arr.filter(word => word.trim() !== "");
        return filteredArr.join(" ").trim();
    }
}

const s = new Solution();
console.log(s.reverseWords(" the sky is blue ")); // "blue is sky the"

/*
Time complexity: O(N)
Space complexity: O(N)
where N is the length of the input string.
*/