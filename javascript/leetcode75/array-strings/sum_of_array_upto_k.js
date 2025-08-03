// Number of subarrays having sum exactly equal to k

function sum(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum == k) {
                count += 1;
            }
        }
    }
    return count;
}

let arr = [10, 2, -2, -20, 10];
let k = -10;
console.log(sum(arr, k)); 