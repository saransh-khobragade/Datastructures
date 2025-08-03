class Solution {
    longestConsecutive(nums) {
        let startToEnd = {};  //startToEnd-end
        let endToStart = {};    //end-startToEnd
        let l = 0;

        for (let x of nums) {
            let flag = false;
            // if x in s:
            //     continue
            if (x + 1 in startToEnd) {
                startToEnd[x] = startToEnd[x + 1];
                delete startToEnd[x + 1];
                
                if (x in endToStart) {
                    endToStart[startToEnd[x]] = endToStart[x];
                    startToEnd[endToStart[x]] = startToEnd[x];
                    delete endToStart[x];
                }
                // end[x+1] = x
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
                // startToEnd[x-1] = x
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

let s = new Solution();
s.longestConsecutive([100, 4, 200, 1, 3, 2]); 