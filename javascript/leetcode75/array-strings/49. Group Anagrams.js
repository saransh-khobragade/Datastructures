class Solution {
    groupAnagrams(strs) {
        let res = {};
        for (let word of strs) {
            let temp = word.split('').sort().join('');
            if (temp in res) {
                res[temp].push(word);
            } else {
                res[temp] = [word];
            }
        }
        let result = [];
        for (let x in res) {
            result.push(res[x]);
        }
        return result;
    }
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let s = new Solution();
console.log(s.groupAnagrams(strs));

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]] 