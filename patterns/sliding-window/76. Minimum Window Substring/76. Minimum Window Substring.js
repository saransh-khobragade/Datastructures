/**
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.
*/
var minWindow = function (s, t) {
    let acciiArr = Array(26).fill(0);
    for (let i = 0; i < t.length; i++) {
        let acciiIndex = t[i].charCodeAt(0) - 65;
        acciiArr[acciiIndex] += 1;
    }

    tmax = acciiArr.reduce((a, c) => a + c, 0);
    smax = 0;

    let left = 0;
    let right = 0;

    while (right < s.length) {
        if (smax < tmax) {
            let asciiIndex = s[right].charCodeAt(0) - 65;
            if (acciiArr[asciiIndex] > 0) {
                smax += 1;
            }
            right += 1;
        } else {
            while (smax == tmax) {
                let asciiIndex = s[left].charCodeAt(0) - 65;
                if (acciiArr[asciiIndex] > 0) {
                    smax -= 1;
                }
                left += 1;
            }
        }
    }
    return s.slice(left, right);
};
console.log(minWindow("ADOBECODEBANC", "ABC"));

// 0    1   2   3   4   5   6   7   8   9   10  11  12
// A    D   O   B   E   C   O   D   E   B   A   N   C
