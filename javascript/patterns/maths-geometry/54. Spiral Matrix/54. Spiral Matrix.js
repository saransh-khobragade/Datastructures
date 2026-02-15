/*Given an m x n matrix, return all elements of the matrix in spiral order.
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/
var spiralOrder = function (matrix) {
    let row = matrix.length - 1;
    let col = matrix[0].length - 1;

    let left = 0;
    let right = col;

    let top = 0;
    let bottom = row;

    let result = [];

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top += 1;

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right -= 1;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom -= 1;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left += 1;
        }
    }
    return result;
};
console.log(spiralOrder([[7], [9], [6]]));
