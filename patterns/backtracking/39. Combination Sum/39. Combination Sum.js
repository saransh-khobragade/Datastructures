/**
 * Given an array of distinct integers candidates and a target integer target,
 * return a list of all unique combinations of candidates where the chosen numbers
 * sum to target. You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times.
 */

function combinationSum(candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];

    function backtrack(start, comb, rem) {
        if (rem === 0) {
            result.push([...comb]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            const val = candidates[i];
            if (val > rem) break; // prune — candidates sorted
            comb.push(val);
            backtrack(i, comb, rem - val); // i (not i+1) allows reuse
            comb.pop();
        }
    }

    backtrack(0, [], target);
    return result;
}

// Example usage
const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target)); // [[2, 2, 3], [7]]
