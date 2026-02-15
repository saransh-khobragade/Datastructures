"""
You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
"""

from typing import List


class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        start = 0
        end = 0
        currSum = 0
        maxAvg = float("-inf")
        avg = 0

        while end - start < k:
            currSum += nums[end]
            avg = currSum / k
            end += 1
        maxAvg = max(maxAvg, avg)

        while end < len(nums):
            currSum -= nums[start]
            currSum += nums[end]
            avg = currSum / k
            maxAvg = max(maxAvg, avg)
            start += 1
            end += 1
        return maxAvg


s = Solution()
print(s.findMaxAverage([0, 1, 1, 3, 3], 4))
