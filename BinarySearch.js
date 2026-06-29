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