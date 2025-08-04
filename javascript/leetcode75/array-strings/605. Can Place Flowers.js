/**
 * You have a long flowerbed in which some of the plots are planted, and some are not. However,
 * flowers cannot be planted in adjacent plots.
 * Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty,
 * and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 */

class Solution {
    canPlaceFlowers(flowerbed, n) {
        let count = 0;
        let length = flowerbed.length;
        for (let i = 0; i < length; i++) {
            if (flowerbed[i] === 0) {
                let empty_left = (i === 0) || (flowerbed[i - 1] === 0);
                let empty_right = (i === length - 1) || (flowerbed[i + 1] === 0);
                if (empty_left && empty_right) {
                    flowerbed[i] = 1;
                    count += 1;
                    if (count >= n) {
                        return true;
                    }
                }
            }
        }
        return count >= n;
    }
}

const s = new Solution();
console.log(s.canPlaceFlowers([0, 0, 1, 0, 0], 1));

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 */ 