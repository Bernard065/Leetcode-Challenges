Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example 1:

Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
Example 2:

Input: matrix = [["0","1"],["1","0"]]
Output: 1
Example 3:

Input: matrix = [["0"]]
Output: 0

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'.

Breakdown problem.

Given a 2D grid(matrix) where each element is either "0" or "1":
where "1" represents a part of a potential square and "0" breaks up the potential for a square as it cannot be included in one.

The goal is to find the largest square made entirely of "1"s within this matrix and return its area.

Approach

Common method to solve this problem is using Dynamic Programming(DP).

1. Define a DP talbe dp[i][j], where each dp[i][j] stores the side length of the largest square whose bottom right corner is at (i, j).

2. Transition rule:
   If matrix[i][j] is 1, then dp[i][j] can be the minimum of the three square above to the left and top-left of dp[i][j] plus 1.

dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1

Pseudocode

function maximalSquare(matrix):
if matrix is empty:
return 0

    rows = number of rows in matrix
    cols = number of columns in matrix
    max_side = 0 // to track the side length of the largest square found

    // Create a DP table of size (rows + 1) x (cols + 1) initialized to 0
    // We add an extra row and column to handle boundaries easily
    dp = 2D array of size(rows + 1) * (cols + 1)

    // Loop through each cell in the matrix
    for i from 1 to rows:
        for j from 1 to cols:
            if matrix[i-1][j-1] == "1": // Only consider cells with "1"
                // DP transition: calculate the side of the largest square ending at (i, j)
                dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
                // Update max_side with the largest square side length found so far
                max_side = max(max_side, dp[i][j])

    // The area of the largest square is side length squared
    return max_side * max_side
