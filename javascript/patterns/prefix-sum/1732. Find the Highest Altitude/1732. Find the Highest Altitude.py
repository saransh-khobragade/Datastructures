"""
There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.
You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1."""

from typing import List


class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        s = 0
        max_sum = 0  # Start at 0 since biker begins at altitude 0
        for x in gain:
            s += x
            max_sum = max(max_sum, s)
        return max_sum


s = Solution()
print(s.largestAltitude([-4, -3, -2, -1, 4, 3, 2]))

# Time complexity: O(n)
# Space complexity: O(1)