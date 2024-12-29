function isSafe(board, i, j, num) {
    // can we place num on i.j
    // check if num is already on the ith row
    for (let col = 0; col < 9; col++) {
        if (board[i][col] == num) return false;
    }
    // check if num is already on the jth col
    for (let row = 0; row < 9; row++) {
        if (board[row][j] == num) return false;
    }
    // big box
    // coordinate of bigbox
    let I = Math.floor(i / 3);
    let J = Math.floor(j / 3);
    // coodinate of top left
    let x = I * 3;
    let y = J * 3;
    for (let row = x; row < (x + 3); row++) {
        for (let col = y; col < (y + 3); col++) {
            if (board[row][col] == num) return false;
        }
    }
    return true;
}

let result;
function f(grid, row, col) {
    if (row == 9) {
        // found the ans;
        result = grid;
        return true;
    }
    if (col == 9) {
        return f(grid, row + 1, 0);
    }
    if (grid[row][col] == ".") {
        for (let num = 1; num <= 9; num++) {
            if (isSafe(grid, row, col, num)) {
                grid[row][col] = "" + num;
                let r = f(grid, row, col + 1);
                if (r == true) return true;
                grid[row][col] = ".";
            }
        }
        return false;
    } else {
        return f(grid, row, col + 1);
    }
}

function solveSudoku(board) {
    result = [];
    f(board, 0, 0);
    return result;
}

let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
console.log(solveSudoku(board))