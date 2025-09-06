/**
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.*/

var isPalindrome = function (s) {
    s = s.replace(/[^a-zA-Z0-9]+/g, "");
    for (let i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() !== s[s.length - 1 - i].toLowerCase()) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("0P"));
