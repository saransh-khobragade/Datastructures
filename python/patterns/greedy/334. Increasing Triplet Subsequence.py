"""
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
"""

from typing import List


class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        first = float("inf")
        second = float("inf")
        for x in nums:
            if x <= first:
                first = x
            elif x <= second:
                second = x
            else:
                return True
        return False
s = Solution()
s.increasingTriplet([1, 2, 3, 4, 5])

"""
Time complexity: O(N)
Space complexity: O(1)
where N is the length of the input array.
"""

"""
Time complexity: O(n)
Space complexity: O(1)
where n is the length of the input array.
"""
