/**
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.
*/
var minWindow = function (s, t) {
    let charArr = Array(128).fill(0);
    let tmax = 0;
    for (let x of t) {
        charArr[x.charCodeAt(0)] += 1;
        tmax += 1;
    }

    let smax = 0;
    let left = 0;
    let right = 0;

    let minWindow = Infinity;
    let minLeft = 0;
    let minRight = 0;

    while (right <= s.length) {
        if (smax === tmax) {
            while (smax === tmax) {
                let charIndex = s.charCodeAt(left);
                // restore count unconditionally
                charArr[charIndex] += 1;
                if (charArr[charIndex] > 0) {
                    smax -= 1;
                }
                left += 1;
            }

            // compute current valid window length (last valid left is left-1)
            let len = right - (left - 1);
            if (len < minWindow) {
                minWindow = len;
                minLeft = left - 1;
                minRight = right;
            }
        } else {
            if (right < s.length) {
                let charIndex = s.charCodeAt(right);
                // always consume (may go negative for extras)
                charArr[charIndex] -= 1;
                if (charArr[charIndex] >= 0) {
                    smax += 1;
                }
            }
            right += 1;
        }
    }
    return minWindow === Infinity ? "" : s.slice(minLeft, minRight);
};

//duplicate values
// console.log(minWindow("bba", "ab")); // -> "ba"

console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
// 0    1   2   3   4   5   6   7   8   9   10  11  12
// A    D   O   B   E   C   O   D   E   B   A   N   C

// A    D   O   B   E   C   O
//      D   O   B   E   C   O   D   E   B
//                  E   C   O   D   E   B   A
//                          O   D   E   B   A   N   C
//                                      B   A   N   C

// Time Complexity : O(n)
// Space Comlexity : O(1)
// Youtube : https://www.youtube.com/watch?v=5TB94-1Yh04
//
//
//
//
//
//
//METHOD2 - WITH HASHMAP METHOD

// var minWindow = function (s, t) {
//     let have = {};
//     let need = {};

//     let haveCount = 0;
//     let needCount = 0;

//     for (let i = 0; i < t.length; i++) {
//         if (have[t[i]]) {
//             have[t[i]] += 1;
//         } else {
//             have[t[i]] = 1;
//             haveCount++;
//         }
//     }

//     let left = 0;
//     let right = 0;

//     let window = 0; //minimum window
//     let min = Infinity;
//     let start = 0;
//     let end = 0;

//     while (right <= s.length) {
//         if (needCount < haveCount) {
//             if (have[s[right]]) {
//                 if (need[s[right]]) {
//                     need[s[right]] += 1;
//                 } else {
//                     need[s[right]] = 1;
//                 }
//                 if (need[s[right]] == have[s[right]]) {
//                     needCount++;
//                 }
//             }
//             right++;
//         } else if (needCount == haveCount) {
//             if (need[s[left]]) {
//                 need[s[left]] -= 1;
//                 if (need[s[left]] < have[s[left]]) {
//                     needCount--;
//                 }
//             }
//             //minimum window calculation
//             window = right - left;
//             if (window < min) {
//                 start = left;
//                 end = right;
//                 min = window;
//             }
//             left++;
//         }
//     }
//     return s.slice(start, end);
// };

// console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"

// 0    1   2   3   4   5   6   7   8   9   10  11  12
// A    D   O   B   E   C   O   D   E   B   A   N   C
