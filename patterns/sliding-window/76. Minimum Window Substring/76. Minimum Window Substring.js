/**
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.
*/
var minWindow = function (s, t) {
    let have = {};
    let need = {};

    let haveCount = 0;
    let needCount = 0;

    for (let i = 0; i < t.length; i++) {
        if (have[t[i]]) {
            have[t[i]] += 1;
        } else {
            have[t[i]] = 1;
            haveCount++;
        }
    }

    let left = 0;
    let right = 0;

    let window = 0; //minimum window
    let min = Infinity;
    let start = 0;
    let end = 0;

    while (right <= s.length) {
        if (needCount < haveCount) {
            if (have[s[right]]) {
                if (need[s[right]]) {
                    need[s[right]] += 1;
                } else {
                    need[s[right]] = 1;
                }
                if (need[s[right]] == have[s[right]]) {
                    needCount++;
                }
            }
            right++;
        } else if (needCount == haveCount) {
            if (need[s[left]]) {
                need[s[left]] -= 1;
                if (need[s[left]] < have[s[left]]) {
                    needCount--;
                }
            }
            //minimum window calculation
            window = right - left;
            if (window < min) {
                start = left;
                end = right;
                min = window;
            }
            left++;
        }
    }
    return s.slice(start, end);
};

console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"

// 0    1   2   3   4   5   6   7   8   9   10  11  12
// A    D   O   B   E   C   O   D   E   B   A   N   C
