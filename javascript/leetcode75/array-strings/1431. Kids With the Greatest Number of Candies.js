/**
 * There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
 * Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
 */

class Solution {
    kidsWithCandies(candies, extraCandies) {
        let result = [];

        for (let x of candies) {
            if ((x + extraCandies) >= Math.max(...candies)) {
                result.push(true);
            } else {
                result.push(false);
            }
        }

        return result;
    }
}

const s = new Solution();
console.log(s.kidsWithCandies([2, 3, 5, 1, 3], 3));

/**
 * Time complexity: O(N)
 * Space complexity: O(N)
 */ 