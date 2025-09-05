# 36. Valid Sudoku
# LeetCode Problem: https://leetcode.com/problems/valid-sudoku/

def isValidSudoku(board):
    """
    Determine if a 9x9 Sudoku board is valid.
    Only the filled cells need to be validated according to the following rules:
    1. Each row must contain the digits 1-9 without repetition.
    2. Each column must contain the digits 1-9 without repetition.
    3. Each of the nine 3x3 sub-boxes must contain the digits 1-9 without repetition.
    """
    # Check rows
    for row in board:
        seen = set()
        for cell in row:
            if cell != '.':
                if cell in seen:
                    return False
                seen.add(cell)
    
    # Check columns
    for col in range(9):
        seen = set()
        for row in range(9):
            cell = board[row][col]
            if cell != '.':
                if cell in seen:
                    return False
                seen.add(cell)
    
    # Check 3x3 sub-boxes
    for box_row in range(3):
        for box_col in range(3):
            seen = set()
            for row in range(box_row * 3, box_row * 3 + 3):
                for col in range(box_col * 3, box_col * 3 + 3):
                    cell = board[row][col]
                    if cell != '.':
                        if cell in seen:
                            return False
                        seen.add(cell)
    
    return True

# Example usage
if __name__ == "__main__":
    board = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
    print(isValidSudoku(board))  # True