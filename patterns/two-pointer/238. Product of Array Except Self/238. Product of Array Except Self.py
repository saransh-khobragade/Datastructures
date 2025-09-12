"""
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
"""

from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = [1] * n

        # prefix pass
        prefix = 1
        for i in range(n):
            res[i] = prefix
            prefix *= nums[i]

        # suffix pass
        suffix = 1
        for i in range(n - 1, -1, -1):
            res[i] *= suffix
            suffix *= nums[i]

        return res


s = Solution()
s.productExceptSelf([1, 2, 3, 4])

# 1     2   6   1  left products
# 1     2   3   4
# 24    12  8   6   right products
