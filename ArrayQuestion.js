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