// 11. Container With Most Water
// LeetCode Problem: https://leetcode.com/problems/container-with-most-water/

class Solution {
    maxArea(height) {
        /**
         * You are given an integer array height of length n. There are n vertical lines drawn such that 
         * the two endpoints of the ith line are (i, 0) and (i, height[i]).
         * 
         * Find two lines that together with the x-axis form a container, such that the container contains the most water.
         * Return the maximum amount of water a container can store.
         */
        let start = 0;
        let end = height.length - 1;
        let maxArea = 0;

        while (start < end) {
            const minHeight = Math.min(height[start], height[end]);
            const area = minHeight * (end - start);
            if (height[start] < height[end]) {
                start++;
            } else {
                end--;
            }
            maxArea = Math.max(maxArea, area);
        }
        return maxArea;
    }
}

const s = new Solution();
console.log(s.maxArea([8, 7, 2, 1])); // 6

/*
Time complexity: O(n)
Space complexity: O(1)
where n is the length of the height array.
*/