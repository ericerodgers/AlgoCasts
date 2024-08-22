// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = []
    for (let i = 0; i<n; i++) {
        results.push(new Array(n).fill(null))
    }
    let counter = 1;
    let startCol = 0;
    let startRow = 0;
    let endRow = n-1;
    let endCol = n-1;

    while (startRow <= endRow && startCol <= endCol) {
        // Top Row: move left to right at top row, after loop is done, increment start row
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter;
            counter += 1
        }
        startRow += 1;

        // Right Column: move top to bottom, after loop is done, decrement end column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter += 1
        }
        endCol -= 1;

        // Bottom Row: move right to left, after loop is done, decrement end row
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter;
            counter += 1;
        }
        endRow -= 1;

        // Left Column: move bottom to top, after loop is done, increment start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter;
            counter += 1;
        }
        startCol += 1
    }
    return results;
}

module.exports = matrix;
