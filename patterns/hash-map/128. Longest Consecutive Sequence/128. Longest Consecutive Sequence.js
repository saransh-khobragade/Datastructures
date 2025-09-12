/**
 * Given an unsorted array of integers nums, return the length of the longest
 * consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 */

class Solution {
    longestConsecutive(nums) {
        const startToEnd = {}; // startToEnd-end
        const endToStart = {}; // end-startToEnd
        let l = 0;

        for (let x of nums) {
            let flag = false;

            if (x + 1 in startToEnd) {
                startToEnd[x] = startToEnd[x + 1];
                delete startToEnd[x + 1];

                if (x in endToStart) {
                    endToStart[startToEnd[x]] = endToStart[x];
                    startToEnd[endToStart[x]] = startToEnd[x];
                    delete endToStart[x];
                }
                flag = true;
            }

            if (x - 1 in endToStart) {
                endToStart[x] = endToStart[x - 1];
                delete endToStart[x - 1];

                if (x in startToEnd) {
                    startToEnd[endToStart[x]] = startToEnd[x];
                    endToStart[startToEnd[x]] = endToStart[x];
                    delete startToEnd[x];
                }
                flag = true;
            }

            if (!flag) {
                startToEnd[x] = x;
                endToStart[x] = x;
            }
        }

        console.log(l);
    }
}

const s = new Solution();
s.longestConsecutive([100, 4, 200, 1, 3, 2]);

/*
Time complexity: O(N)
Space complexity: O(N)
where N is the length of the input array.
*/
