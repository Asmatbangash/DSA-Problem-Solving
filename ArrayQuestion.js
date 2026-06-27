// Find maximum and minimum elements in an array
function findMaxMin(arr){
    if(arr.length === 0){
        return null;
    }
    let max = arr[0];
    let min = arr[0];
    for(let i=1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return {max, min};
}
console.log(findMaxMin([3,1,4,21,5,9]));

// Reverse an array
function reverseArray(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}
console.log(reverseArray([1,2,3,4,5]));

// Find the sum of all elements in an array
function sumOfArray(arr){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArray([1,2,3,4,5]));

// count the number of even and odd numbers in an array
function countEvenOdd(arr){
    let evenCount = 0;
    let oddCount = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return {evenCount, oddCount};
}
console.log(countEvenOdd([1,2,3,4,5,6])); 

// find the second and third largest element in array
function secondAndThirdLargest(arr){
    if(arr.length < 3){
        return null;
    }
    let first = -Infinity, second = -Infinity, third = -Infinity;
    for(let i=0; i < arr.length; i++){
        if(arr[i] > first){
            third = second;
            second = first;
            first = arr[i];
        } else if(arr[i] > second && arr[i] !== first){
            third = second;
            second = arr[i];
        } else if(arr[i] > third && arr[i] !== second && arr[i] !== first){
            third = arr[i];
        }
    }
    return {second, third};
}
console.log(secondAndThirdLargest([1,2,3,4,5])); 
