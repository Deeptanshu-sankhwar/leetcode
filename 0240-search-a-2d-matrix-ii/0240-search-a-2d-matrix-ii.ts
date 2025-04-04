function searchMatrix(matrix: number[][], target: number): boolean {
    if (!matrix.length || !matrix[0].length) return false;

    let row = 0;
    let col = matrix[0].length - 1;

    // start from the top-right, and go left or down
    while (row < matrix.length && col >= 0) {
        const current = matrix[row][col];
        if (current === target) return true;
        if (current > target) {
            col--; // move left
        } else {
            row++; // move down
        }
    }

    return false;
};