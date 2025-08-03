/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    let dic = {};
    
    for (let x of nums) {
        if (x in dic) {
            dic[x] += 1;
        } else {
            dic[x] = 1;
        }
    }
    // sorting dictionary by its values
    let out = Object.entries(dic).sort((a, b) => b[1] - a[1]);
    
    let result = out.map(x => x[0]);

    return result.slice(0, k);
}

// Test case
let nums = [1, 1, 1, 2, 2];
let k = 2;
console.log(topKFrequent(nums, k)); 