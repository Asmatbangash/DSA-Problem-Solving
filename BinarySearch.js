// Binary Search Algorithm
function binarySearch(arr,target){
let st=0;
let end=arr.length-1;
while(st<=end){
    // let mid=Math.floor((st+end)/2)
    
    // better way to avoid overflow
    let mid = Math.floor(st+(end-st)/2)
    if(target > arr[mid]){
        st=mid+1
    }else if(target < arr[mid]){
        end=mid-1
    }else{
        return mid;
    }
}
return -1;
}


console.log(binarySearch([1,2,3,4,5,10,20,50],4))


// Rotated sorted array 
function rotateArry(arr, target) {
    let st = 0;
    let end = arr.length - 1;

    while (st <= end) {
        let mid = Math.floor(st + (end - st) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        // Left half is sorted
        if (arr[st] <= arr[mid]) {

            if (target >= arr[st] && target < arr[mid]) {
                end = mid - 1;
            } else {
                st = mid + 1;
            }

        } else { // Right half is sorted

            if (target > arr[mid] && target <= arr[end]) {
                st = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
}

console.log(rotateArry([4,5,6,7,0,1,2],0)); // 4


// First Approach :  Find the peak element in mountain array
function peakElement(arr){
    let st=0;
    let end=arr.length-1;
    while(st<end){
        let mid=Math.floor(st+(end-st)/2)
        if(arr[mid]<arr[mid+1]){
            st=mid+1;
        }else{
            end=mid;
        }
    }
    return st;
}

console.log(peakElement([0,2,7,3,1,0]))


// Second Approach : Find the peak element in mountain array
function peakElement(arr){
    let st=1;
    let end=arr.length-2;
    while(st<end){
        let mid=Math.floor(st+(end-st)/2)
        if(arr[mid-1] < arr[mid] && arr[mid] > arr[mid+1]){
            return mid;
        }else if(arr[mid-1] < arr[mid]){
            st = mid + 1;
        }else{
            end = mid -1;
        }
}
return -1;
}
console.log(peakElement([0,2,7,3,1,0]))


// binary search single element in sorted array
function singleElement(arr) {
    let n = arr.length;

    if (n === 1) return arr[0];

    let st = 0;
    let end = n - 1;

    while (st <= end) {
        let mid = Math.floor(st + (end - st) / 2);

        // first element
        if (mid === 0) {
            if (arr[0] !== arr[1]) return arr[0];
            st = 1;
            continue;
        }

        // last element
        if (mid === n - 1) {
            if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];
            end = n - 2;
            continue;
        }

        // found answer
        if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
            return arr[mid];
        }

        if (mid % 2 === 0) {
            if (arr[mid] === arr[mid + 1]) {
                st = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            if (arr[mid] === arr[mid - 1]) {
                st = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
}

console.log(singleElement([1,1,2,3,3,7,7,8,8]));        // 2
console.log(singleElement([1,1,2,2,3,3,7,7,10,11,11])); // 10