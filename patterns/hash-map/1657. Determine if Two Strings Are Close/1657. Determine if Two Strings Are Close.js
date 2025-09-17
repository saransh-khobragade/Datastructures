/**
 * Two strings are considered close if you can attain one from the other using the following operations:
 * Operation 1: Swap any two existing characters.
 * Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
 * Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
    Input: word1 = "cabbba", word2 = "abbccc"
    Output: true
    Explanation: You can attain word2 from word1 in 3 operations.
    Apply Operation 1: "cabbba" -> "caabbb"
    Apply Operation 2: "caabbb" -> "baaccc"
    Apply Operation 2: "baaccc" -> "abbccc"
 */
class Solution {
    closeStrings(word1, word2) {
        const hmap1 = {};
        const hmap2 = {};

        //frequency counts
        for (let x of word1.split("")) {
            if (x in hmap1) {
                hmap1[x] = hmap1[x] + 1;
            } else {
                hmap1[x] = 1;
            }
        }
        for (let x of word2.split("")) {
            if (x in hmap2) {
                hmap2[x] = hmap2[x] + 1;
            } else {
                hmap2[x] = 1;
            }
        }

        //Get check no new elements are there
        const freq1 = [];
        for (let [x, y] of Object.entries(hmap1)) {
            if (!(x in hmap2)) {
                return false;
            }
            freq1.push(y);
        }
        const freq2 = [];
        for (let y of Object.values(hmap2)) {
            freq2.push(y);
        }

        //Their freq order will not change.
        freq1.sort((a, b) => a - b);
        freq2.sort((a, b) => a - b);
        return JSON.stringify(freq1) === JSON.stringify(freq2);
    }
}

const s = new Solution();
console.log(s.closeStrings("cabbba", "abbccc")); // true
// console.log(s.closeStrings("a", "aa")); // false

//cabbba
//caabbb (op1)
//accbbb (op1)
//abbccc (op2)

//123
//123

/*
Time complexity: O(n log n)
Space complexity: O(n)
Youtube : https://youtu.be/a6hg5lDQJbk
*/
