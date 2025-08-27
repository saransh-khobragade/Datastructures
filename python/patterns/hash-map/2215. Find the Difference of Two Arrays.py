"""
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]"""

from typing import List


class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        hmap1 = {}
        hmap2 = {}

        for x in nums1:
            if x not in nums2:
                hmap1[x] = True

        for y in nums2:
            if y not in nums1:
                hmap2[y] = True

        return [list(hmap1.keys()), list(hmap2.keys())]


s = Solution()
print(s.findDifference([1, 2, 3], [2, 4, 6]))

# Time complexity: O(n)
# Space complexity: O(n)