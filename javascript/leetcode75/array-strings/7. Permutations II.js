// https://leetcode.com/problems/permutations-ii/
// Input: nums = [1,1,2]
// Output:[[1,1,2],[1,2,1],[2,1,1]]

class Solution {
    permute(nums) {
        let result = [];
        
        if (nums.length == 1) {
            return [nums];
        } else {
            for (let i = 0; i < nums.length; i++) {
                for (let x of this.permute(nums.slice(0, i).concat(nums.slice(i + 1)))) {
                    let start = [nums[i]];
                    start.push(...x);
                    result.push(start);
                }
            }
        }
        return result;
    }
    
    permuteUnique(nums) {
        let arr = this.permute(nums);
        let unique = new Set();
        let result = [];
    
        for (let i = 0; i < arr.length; i++) {
            let s = arr[i].map(String).join('');

            if (!unique.has(s)) {
                unique.add(s);
                result.push(arr[i]);
            }
        }
        
        return result;
    }
}

let s = new Solution();
console.log(s.permuteUnique([1, 1, 2])); 