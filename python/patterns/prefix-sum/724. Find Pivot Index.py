"""
Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
Return the leftmost pivot index. If no such index exists, return -1.
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11"""

from typing import List


class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        total = sum(nums)

        leftSum = 0
        righSum = total

        for i in range(len(nums)):
            righSum = righSum - nums[i]
            if leftSum == righSum:
                return i
            leftSum += nums[i]

        return -1


s = Solution()
print(s.pivotIndex([1, 7, 3, 6, 5, 6]))

# Total     28
# Nums:     1   7   3   6    5    6
#           27  20  17  11   6    0
# L-Sum:    0   1   8   11   17   22

# Time complexity: o(n)
# Space complexity: o(1)
# Youtube: https://youtu.be/wVeHcoCZS-0
