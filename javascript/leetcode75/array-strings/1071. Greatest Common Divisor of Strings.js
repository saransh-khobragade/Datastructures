/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
*/

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

class Solution {
    gcdOfStrings(str1, str2) {
        let length = gcd(str1.length, str2.length);
        if (str1 + str2 !== str2 + str1) {
            return "";
        } else {
            return str1.substring(0, length);
        }
    }
}

let s = new Solution();
console.log(s.gcdOfStrings("ABCABC", "ABC"));
/*
Time Complexity:
O(n + m), where n = len(str1) and m = len(str2).

This is because concatenating and comparing the two strings takes O(n + m) time.
Space Complexity:
O(n + m), due to the temporary concatenated strings created for comparison.

The result substring uses up to O(min(n, m)) space.
*/ 