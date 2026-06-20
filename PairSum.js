// Broute force approach

function pairSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}

console.log(pairSum([1, 2, 3, 4, 5], 5)); // Output: [0, 3] (1 + 4 = 5)
console.log(pairSum([1, -2, 3, -1, 5], 2)); // Output: [0, 2] (1 + 3 = 4)

// Optimize approach using two pointers
function pairSum(arr, target) {
    let i = 0; let j = arr.length - 1;
    while (i < j) {
        let sum = arr[i] + arr[j];
        if (sum === target) {
            return [i, j];
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
    return null;
}

console.log(pairSum([1, 2, 3, 4, 5], 5)); // Output: [0, 3] (1 + 4 = 5)
console.log(pairSum([1, -2, 3, -1, 5], 2)); // Output: [0, 2] (1 + 3 = 4)