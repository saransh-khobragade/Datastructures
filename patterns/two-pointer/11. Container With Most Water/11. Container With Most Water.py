"""
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
"""

from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        start = 0
        end = len(height) - 1
        maxArea = 0

        while start < end:
            minHeight = min(height[start], height[end])
            area = minHeight * (end - start)
            if height[start] < height[end]:
                start += 1
            else:
                end -= 1
            maxArea = max(maxArea, area)
        return maxArea


s = Solution()
print(s.maxArea([8, 7, 2, 1]))

"""
Index:    0 1 2 3 4 5 6 7 8
Height:   1 8 6 2 5 4 8 3 7

"""
