// 2352. Equal Row and Column Pairs
// LeetCode Problem: https://leetcode.com/problems/equal-row-and-column-pairs/

class Solution {
    equalPairs(grid) {
        /**
         * Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) 
         * such that row ri and column cj are equal.
         * 
         * A row and column pair is considered equal if they contain the same elements 
         * in the same order (i.e., an equal array).
         */
        const rowHmap = {};
        const colHmap = {};
        let count = 0;

        for (let i = 0; i < grid.length; i++) {
            let row = "";
            let col = "";
            for (let j = 0; j < grid.length; j++) {
                row += grid[i][j] + ",";
                col += grid[j][i] + ",";
            }

            if (row in rowHmap) {
                rowHmap[row] = rowHmap[row] + 1;
            } else {
                rowHmap[row] = 1;
            }

            if (col in colHmap) {
                colHmap[col] = colHmap[col] + 1;
            } else {
                colHmap[col] = 1;
            }
        }

        for (let [key, value] of Object.entries(rowHmap)) {
            if (key in colHmap) {
                count += value * colHmap[key];
            }
        }
        return count;
    }
}

const s = new Solution();
console.log(s.equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]])); // 1

// Time complexity: O(n^2)
// Space complexity: O(n^2)