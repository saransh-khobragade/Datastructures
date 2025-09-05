// 1431. Kids With the Greatest Number of Candies
// LeetCode Problem: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

function kidsWithCandies(candies, extraCandies) {
    /**
     * Given the array candies and the integer extraCandies, where candies[i] represents 
     * the number of candies that the ith kid has.
     * 
     * For each kid, check if there is a way to distribute extraCandies among the kids 
     * such that he or she can have the greatest number of candies among them.
     * 
     * Return a boolean array result of length n, where result[i] is true if, after giving 
     * the ith kid all the extraCandies, they will have the greatest number of candies 
     * among all the kids, or false otherwise.
     */
    const maxCandies = Math.max(...candies);
    const result = [];
    
    for (let candy of candies) {
        if (candy + extraCandies >= maxCandies) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    
    return result;
}

// Example usage
const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies)); // [true, true, true, false, true]