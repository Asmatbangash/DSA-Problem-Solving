// broute force appraoch

// function maxSubArraySum(arr, n) {
//     if (n < 1) return null;
//     let maxSum = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         for (let j = i; j < i + n && j < arr.length; j++) {
//             sum += arr[j];
//         }
//         maxSum = Math.max(maxSum, sum);
//     }
//     return maxSum;
// }

// console.log(maxSubArraySum([1, 2, 3, 4, 5], 2)); // Output: 9 (4 + 5)
// console.log(maxSubArraySum([1, -2, 3, -1, 5], 3)); // Output: 7 (3 + -1 + 5)

// Optimize Approach using kadane's algorithm

function maxSubArraySum(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}

console.log(maxSubArraySum([1, 2, 3, 4, 5])); // Output: 15 (1 + 2 + 3 + 4 + 5)
// console.log(maxSubArraySum([1, -2, 3, -1, 5])); // Output: 7 (3 + -1 + 5)    