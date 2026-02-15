/**
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
*/
var coinChange = function (coins, amount) {
    const dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    for (let i = 1; i < amount + 1; i++) {
        for (coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] == Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
console.log(coinChange([2], 3));

//https://www.youtube.com/watch?v=koE9ly1CFDc
