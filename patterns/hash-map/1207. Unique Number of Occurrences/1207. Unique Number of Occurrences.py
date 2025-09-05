"""
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
Input: arr = [1,2,2,1,1,3]
Output: true"""

from typing import List


class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        hmap = {}
        for x in arr:
            if x in hmap:
                hmap[x] = hmap[x] + 1
            else:
                hmap[x] = 1

        hmapLen = len(hmap.values())
        setLen = len(set(hmap.values()))

        return hmapLen == setLen

s = Solution()
print(s.uniqueOccurrences([1, 2, 2, 1, 1, 3]))

# Time complexity: O(n)
# Space complexity: O(n)