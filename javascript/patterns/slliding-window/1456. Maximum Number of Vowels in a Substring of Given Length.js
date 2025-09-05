/**
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
 */
var maxVowels = function(s, k) {
    let i = 0
    let j = 0
    while(i < s.length && j < s.length){
        const vowels = [ 'a', 'e', 'i' , 'o', 'u']
        if(!s[i] in vowels){
            i++
        }else{
            i
        }
    }
};
console.log(maxVowels("abciiidef",3))