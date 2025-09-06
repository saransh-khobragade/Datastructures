// 2,
var isPrime = function (n) {
    if (n < 2) return false; //edge case
    if (n === 2) return true; //edge case
    if (n % 2 === 0) return false; //eliminated even number

    const limit = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= limit; i += 2) {
        // test only odd divisors because we eleminated even numbers
        if (n % i === 0) return false;
    }
    return true;
};

console.log(1, isPrime(1));
console.log(2, isPrime(2));
console.log(3, isPrime(3));
console.log(4, isPrime(4));
console.log(5, isPrime(5));
console.log(6, isPrime(6));

//Time complexity : O(log(N))
