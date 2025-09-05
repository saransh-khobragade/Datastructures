// 443. String Compression
// LeetCode Problem: https://leetcode.com/problems/string-compression/

class Solution {
    compress(chars) {
        /**
         * Given an array of characters chars, compress it using the following algorithm:
         * Begin with an empty string s. For each group of consecutive repeating characters in chars:
         * If the group's length is 1, append the character to s.
         * Otherwise, append the character followed by the group's length.
         * The compressed string s should not be returned separately, but instead, be stored in the input character array chars.
         * Note that group lengths that are 10 or longer will be split into multiple characters in chars.
         * After you are done modifying the input array, return the new length of the array.
         */
        if (chars.length === 0) {
            return 0;
        }
        if (chars.length === 1) {
            return 1;
        }

        let read = 0;
        let write = 0;

        while (read < chars.length) {
            let count = 0;
            const curr = chars[read];

            while (read < chars.length && chars[read] === curr) {
                read++;
                count++;
            }

            chars[write] = curr;
            write++;

            if (count > 1) {
                if (count < 10) {
                    chars[write] = count.toString();
                    write++;
                } else {
                    const countStr = count.toString();
                    for (let i = 0; i < countStr.length; i++) {
                        chars[write + i] = countStr[i];
                    }
                    write += countStr.length;
                }
            }
        }

        return write;
    }
}

const s = new Solution();
const v = ["a", "a", "b", "b", "c", "c", "c"];
console.log(s.compress(v)); // 6
console.log(v); // ["a","2","b","2","c","3"]

// Time complexity: O(n)
// Space complexity: O(1)