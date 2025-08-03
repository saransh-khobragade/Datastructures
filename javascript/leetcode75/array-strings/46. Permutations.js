// https://leetcode.com/problems/permutations/
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
class Solution {
    permuteUtil(arr, pos, size) {
        let result = [];
        if (pos == size) {
            return [[...arr]];
        } else {
            for (let i = pos; i < size; i++) {
                [arr[i], arr[pos]] = [arr[pos], arr[i]];
                result.push(...this.permuteUtil(arr, pos + 1, size));
                [arr[i], arr[pos]] = [arr[pos], arr[i]];
            }
        }
        return result;
    }

    permute(nums) {
        return this.permuteUtil(nums, 0, nums.length);
    }
}

let s = new Solution();
console.log(s.permute([1, 2, 3])); 