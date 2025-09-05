// 36. Valid Sudoku
// LeetCode Problem: https://leetcode.com/problems/valid-sudoku/

function isValidSudoku(board) {
    /**
     * Determine if a 9x9 Sudoku board is valid.
     * Only the filled cells need to be validated according to the following rules:
     * 1. Each row must contain the digits 1-9 without repetition.
     * 2. Each column must contain the digits 1-9 without repetition.
     * 3. Each of the nine 3x3 sub-boxes must contain the digits 1-9 without repetition.
     */
    
    // Check rows
    for (let row of board) {
        const seen = new Set();
        for (let cell of row) {
            if (cell !== '.') {
                if (seen.has(cell)) {
                    return false;
                }
                seen.add(cell);
            }
        }
    }
    
    // Check columns
    for (let col = 0; col < 9; col++) {
        const seen = new Set();
        for (let row = 0; row < 9; row++) {
            const cell = board[row][col];
            if (cell !== '.') {
                if (seen.has(cell)) {
                    return false;
                }
                seen.add(cell);
            }
        }
    }
    
    // Check 3x3 sub-boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            const seen = new Set();
            for (let row = boxRow * 3; row < boxRow * 3 + 3; row++) {
                for (let col = boxCol * 3; col < boxCol * 3 + 3; col++) {
                    const cell = board[row][col];
                    if (cell !== '.') {
                        if (seen.has(cell)) {
                            return false;
                        }
                        seen.add(cell);
                    }
                }
            }
        }
    }
    
    return true;
}

// Example usage
const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board)); // true