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
function rotatedBinarySearch(arr,target){
    let st=0;
    let end=arr.length-1;
    while(st<=end){
        let mid=Math.floor(st+(end-st)/2)
        if(arr[mid]===target){
            return mid;
        }
        // left half is sorted
        if(arr[st]<=arr[mid]){
            if(target>=arr[st] && target<arr[mid]){
                end=mid-1;
            }else{
                st=mid+1;
            }
        }else{
            // right half is sorted
            if(target>arr[mid] && target<=arr[end]){
                st=mid+1;
            }else{
                end=mid-1;
            }
        }
    }
    return -1;
}

console.log(rotatedBinarySearch([4,5,6,7,0,1,2],5))