"""
Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).
Input [[3,2,1],[1,7,6],[2,7,7]]
        +---+---+---+
Row 0 |  3 | 2 | 1 |
        +---+---+---+
Row 1 |  1 | 7 | 6 |
        +---+---+---+
Row 2 |  2 | 7 | 7 |
        +---+---+---+
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]
"""

from typing import List


class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        rowHmap = {}
        colHmap = {}
        count = 0

        for i in range(len(grid)):
            row = ""
            col = ""
            for j in range(len(grid)):
                row += str(grid[i][j]) + ","
                col += str(grid[j][i]) + ","

            if row in rowHmap:
                rowHmap[row] = rowHmap[row] + 1
            else:
                rowHmap[row] = 1

            if col in colHmap:
                colHmap[col] = colHmap[col] + 1
            else:
                colHmap[col] = 1

        for key, value in rowHmap.items():
            if key in colHmap:
                count += value * colHmap[key]
        return count


s = Solution()
print(s.equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]))

# [3, 1, 2, 2]
# [1, 4, 4, 5]
# [2, 4, 2, 2]
# [2, 4, 2, 2]
