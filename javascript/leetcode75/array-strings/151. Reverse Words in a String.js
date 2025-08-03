/**
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters.
 * The words in s will be separated by at least one space.
 * Return a string of the words in reverse order concatenated by a single space.
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 */

class Solution {
    reverseWords(s) {
        let arr = s.split(" ");
        arr.reverse();
        arr = arr.filter(word => word.trim());
        return arr.join(" ").trim();
    }
}

let s = new Solution();
console.log(s.reverseWords(" the sky is blue ")); 