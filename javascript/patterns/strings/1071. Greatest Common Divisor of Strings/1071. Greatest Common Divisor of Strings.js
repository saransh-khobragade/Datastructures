// 1071. Greatest Common Divisor of Strings
// LeetCode Problem: https://leetcode.com/problems/greatest-common-divisor-of-strings/

class Solution {
    gcdOfStrings(str1, str2) {
        /**
         * For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t 
         * (i.e., t is concatenated with itself one or more times).
         * 
         * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
         */
        const length = this.gcd(str1.length, str2.length);
        if (str1 + str2 !== str2 + str1) {
            return "";
        } else {
            return str1.substring(0, length);
        }
    }
    
    gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}

const s = new Solution();
console.log(s.gcdOfStrings("ABCABC", "ABC")); // "ABC"

/*
Time complexity: O(N + M)
Space complexity: O(N + M)
where N and M are the lengths of the input strings.
*/