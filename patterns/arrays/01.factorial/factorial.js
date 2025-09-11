function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

/*
1
1*2
1*2*3
1*2*3*4
1*2*3*4*5
*/

//Time Complexity : O(n)
//Space Complexity : O(n)
