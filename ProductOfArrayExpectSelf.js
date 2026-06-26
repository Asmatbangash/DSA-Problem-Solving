// Broute force  approach

// function productOfArrayExceptSelf(arr) {
//     const n = arr.length;
//     const result = new Array(n).fill(1);
    
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i !== j) {
//                 result[i] *= arr[j];
//             }
//         }
//     }

//     return result;
// }   

// optimal approach
function productOfArrayExceptSelf(arr) {    
    const n = arr.length;
    const result = new Array(n).fill(1);
    
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= arr[i];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= arr[i];
    }

    return result;
}   

console.log(productOfArrayExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]