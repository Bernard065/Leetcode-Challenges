Given an integer array nums, return the length of the longest strictly increasing 
subsequence
.

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?


Breakdown

1. A subsequence is a sequence derived by deleting some or none of the elements of an array without changing the order of the remaining elements. Each element in the subsequence must be greater then the previous one.

Pseudocode

function lengthOfLIS(nums):
    if nums is empty:
        return 0

    n = length of nums
    dp = array of size n filled with 1 // Initialize dp array where each element is 1

    for i from 1 to n-1:
        for j from 0 to i-1:
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max value in dp
