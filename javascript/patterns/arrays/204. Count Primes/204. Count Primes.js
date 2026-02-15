/**
Given an integer n, return the number of prime numbers that are strictly less than n.
 */
function countPrimes(n) {
    if (n <= 2) return 0;
    const isPrime = new Array(n); // true or false
    isPrime.fill(true);
    isPrime[0] = isPrime[1] = false;

    const limit = Math.floor(Math.sqrt(n - 1));
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) {
            // start from i*i, not 2*i
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let count = 0;
    for (let i = 2; i < n; i++) if (isPrime[i]) count++;
    return count;
}

console.log(countPrimes(10)); // 4

//      0       1       2       3       4       5       6       7       8       9
//  [ false,  false,  true,   true,   true,   true,   true,   true,   true,   true]

//2 [ false,  false,  true,   true,   false,  true,   false,  true,   false,  true]

//3 [ false,  false,  true,   true,   false,  true,   false,  true,   false,  false]

//Sieve of Eratosthenes
//Time complexity : O(n log(log(n)))
//Space complexity : O(n)
