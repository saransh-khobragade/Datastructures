/**
Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.
A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.
Input: grid = [[0,1],[1,0]]
Output: 2
 */
var shortestPathBinaryMatrix = function (grid) {
    const n = grid.length;
    if (n === 0) return -1;
    // blocked start or end
    if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) return -1;
    // single cell grid
    if (n === 1) return 1;

    const dirs = [
        [1, 0], // down
        [-1, 0], // up
        [0, 1], // right
        [0, -1], // left
        [1, 1], // down-right
        [1, -1], // down-left
        [-1, 1], // up-right
        [-1, -1], // up-left
    ];

    // queue stores [r, c, dist]
    const q = [];
    q.push([0, 0, 1]);
    // mark visited in-place to save memory
    grid[0][0] = 1;

    let head = 0;
    while (head < q.length) {
        const [r, c, d] = q[head++];
        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] === 0) {
                // if we reach target, return distance
                if (nr === n - 1 && nc === n - 1) return d + 1;
                grid[nr][nc] = 1; // mark visited
                q.push([nr, nc, d + 1]); // enqueue with incremented distance
            }
        }
    }

    return -1;
};

console.log(
    shortestPathBinaryMatrix([
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0],
    ])
); //4
