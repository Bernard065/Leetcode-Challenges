/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function(matrix) {
    if (matrix.length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxSide = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === "1") {
                if (i > 0 && j > 0) {
                    matrix[i][j] = Math.min(
                        Number(matrix[i - 1][j]),
                        Number(matrix[i][j - 1]),
                        Number(matrix[i - 1][j - 1])
                    ) + 1
                }

                maxSide = Math.max(maxSide, Number(matrix[i][j]))
            }
        }
    }

    return maxSide * maxSide
};