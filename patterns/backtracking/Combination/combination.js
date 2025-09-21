function combine(nums, k) {
    const result = [];

    function backtrack(start, arr) {
        if (arr.length === k) {
            result.push([...arr]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            arr.push(nums[i]);
            backtrack(i + 1, arr);
            arr.pop();
        }
    }

    backtrack(0, []);
    return result;
}

// Example usage:
console.log(combine([1, 2, 3], 2));
// Output: [ [1,2], [1,3], [2,3] ]
