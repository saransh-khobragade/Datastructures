/**
 * Two strings are considered close if you can attain one from the other using the following operations:
 * Operation 1: Swap any two existing characters.
 * Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
 * Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
 */
class Solution {
    closeStrings(word1, word2) {
        const hmap1 = {};
        const hmap2 = {};

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

        const freq1 = [];
        for (let [x, y] of Object.entries(hmap1)) {
            if (!(x in hmap2)) {
                return false;
            }
            freq1.push(y);
        }
        freq1.sort((a, b) => a - b);

        const freq2 = [];
        for (let y of Object.values(hmap2)) {
            freq2.push(y);
        }

        freq2.sort((a, b) => a - b);
        return JSON.stringify(freq1) === JSON.stringify(freq2);
    }
}

const s = new Solution();
console.log(s.closeStrings("cabbba", "abbccc")); // true
// console.log(s.closeStrings("a", "aa")); // false

/*
Time complexity: O(n log n)
Space complexity: O(n)
where n is the length of the strings.
*/
