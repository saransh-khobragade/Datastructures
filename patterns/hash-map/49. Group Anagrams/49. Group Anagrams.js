// 49. Group Anagrams
// LeetCode Problem: https://leetcode.com/problems/group-anagrams/

class Solution {
    groupAnagrams(strs) {
        /**
         * Given an array of strings strs, group the anagrams together. 
         * You can return the answer in any order.
         * 
         * An Anagram is a word or phrase formed by rearranging the letters of a different 
         * word or phrase, typically using all the original letters exactly once.
         */
        const res = {};
        for (let word of strs) {
            const temp = word.split('').sort().join('');
            if (temp in res) {
                res[temp].push(word);
            } else {
                res[temp] = [word];
            }
        }
        const result = [];
        for (let x in res) {
            result.push(res[x]);
        }
        return result;
    }
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const s = new Solution();
console.log(s.groupAnagrams(strs)); // [["eat","tea","ate"],["tan","nat"],["bat"]]

/*
Time complexity: O(N * K log K)
Space complexity: O(N * K)
where N is the number of strings and K is the maximum length of any string.
*/