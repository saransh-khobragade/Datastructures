"""
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
"""

from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        curr = 0
        # shift all no zeros to left, and count how many are there,because thats many will be zero at the end
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[curr] = nums[i]
                curr += 1
        # add zeros at the end
        for j in range(curr, len(nums)):
            nums[j] = 0
        return nums


s = Solution()
print(s.moveZeroes([0, 1, 0, 3, 12]))

# Time complexity: O(n)
# Space complexity: O(1)
# Youtube: https://youtu.be/kdgWM42bY4E
