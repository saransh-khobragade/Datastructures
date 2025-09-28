/**
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let currstart = intervals[0][0];
    let currEnd = intervals[0][1];
    let res = [];
    for (let i = 1; i < intervals.length; i++) {
        let nextStart = intervals[i][0];
        let nextEnd = intervals[i][1];
        if (nextStart <= currEnd) {
            currEnd = Math.max(currEnd, nextEnd); //because next pair can be inside first pair
        } else {
            res.push([currstart, currEnd]);
            currstart = nextStart;
            currEnd = nextEnd;
        }
    }
    res.push([currstart, currEnd]);
    return res;
};
console.log(
    merge([
        [1, 4],
        [2, 3],
    ])
);
