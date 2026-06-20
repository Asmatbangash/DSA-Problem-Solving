
function findMaxElement(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }
    
    let maxElement = arr[0]; // Initialize maxElement with the first element of the array
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i]; // Update maxElement if a larger element is found
        }
    }
    
    return maxElement; // Return the maximum element found in the array
}

// Example usage:
const array = [3, 5, 17, 2, 8];
const max = findMaxElement(array);
console.log("The maximum element in the array is:", max);