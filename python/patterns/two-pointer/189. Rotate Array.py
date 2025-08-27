"""
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
"""

from typing import List


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        k = k % len(nums)
        if k == 0:
            return

        if k > len(nums) - 1:
            print(nums)
            return
        start = 0
        end = len(nums) - 1

        # reverse complete array
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1

        # reverse 0 to k
        start = 0
        end = k - 1
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1

        # reverse k to n-1
        start = k
        end = len(nums) - 1
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1
        return nums


s = Solution()
print(s.rotate([1, 2, 3, 4, 5, 6], 2))

# Time complexity: O(n)
# Space complexity: O(1)
# Youtube : https://youtu.be/NxpY0P3gcRA