function findMinElement(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }
    
    let minElement = arr[0]; // Initialize minElement with the first element of the array
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i]; // Update minElement if a smaller element is found
        }
    }
    
    return minElement; // Return the minimum element found in the array
}

// Example usage:
const array = [3, 5, 17, 2, 8];
const min = findMinElement(array);
console.log("The minimum element in the array is:", min);