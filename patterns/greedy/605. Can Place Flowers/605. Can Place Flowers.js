// 605. Can Place Flowers
// LeetCode Problem: https://leetcode.com/problems/can-place-flowers/

function canPlaceFlowers(flowerbed, n) {
    /**
     * You have a long flowerbed in which some of the plots are planted, and some are not. 
     * However, flowers cannot be planted in adjacent plots.
     * 
     * Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 
     * means not empty, and an integer n, return true if n new flowers can be planted in 
     * the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
     */
    let count = 0;
    let i = 0;
    
    while (i < flowerbed.length) {
        if (flowerbed[i] === 0) {
            // Check if previous and next plots are empty (or out of bounds)
            const prevEmpty = (i === 0 || flowerbed[i-1] === 0);
            const nextEmpty = (i === flowerbed.length-1 || flowerbed[i+1] === 0);
            
            if (prevEmpty && nextEmpty) {
                flowerbed[i] = 1;
                count++;
                i += 2; // Skip next plot since we can't plant adjacent
            } else {
                i++;
            }
        } else {
            i += 2; // Skip next plot if current is planted
        }
    }
    
    return count >= n;
}

// Example usage
let flowerbed = [1, 0, 0, 0, 1];
let n = 1;
console.log(canPlaceFlowers(flowerbed, n)); // true

flowerbed = [1, 0, 0, 0, 1];
n = 2;
console.log(canPlaceFlowers(flowerbed, n)); // false