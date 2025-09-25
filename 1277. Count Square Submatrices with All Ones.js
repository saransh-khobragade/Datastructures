/*Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.
Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.*/

var countSquares = function (matrix) {
    let count = 0;
    const row = matrix.length;
    const col = matrix[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i > 0 && j > 0 && matrix[i][j] == 1) {
                matrix[i][j] =
                    1 +
                    Math.min(
                        matrix[i - 1][j],
                        matrix[i][j - 1],
                        matrix[i - 1][j - 1]
                    );
            }
            count += matrix[i][j];
        }
    }
    return count;
};

const matrix = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
];
console.log(countSquares(matrix));
