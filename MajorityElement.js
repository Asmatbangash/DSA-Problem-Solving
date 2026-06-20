// Broute force Approach

// function majorityElement(arr){
// for(let i = 0; i < arr.length; i++){
//     let freq = 0;
//     for(let j = 0; j < arr.length; j++){
//         if(arr[i] === arr[j]){
//             freq++;
//         }
//     }
//     if(freq > arr.length/2){
//         return arr[i];
//     }
// }
// return null;
// }

// console.log(majorityElement([3,2,2,3,2,]));


// optimize approach sort array first
// function majorityElement(arr){
//       arr.sort()
//       let freq = 1;
//       let ans = arr[0];
//      for(let i=1; i < arr.length; i++){
//         if(arr[i] === arr[i-1]){
//             freq++;
//         }else{
//             freq = 1
//             ans = arr[i]
//         }
//         if(freq > arr.length/2){
//             return ans;
//         }   
//     }
//     return null;
// }
// console.log(majorityElement([2,2,1,2,1]))

// mor's voting algorithm
// function majorityElement(arr){
//     let freq = 0;
//     let candidate = null;
//     for(let num of arr){
//         if(freq === 0){
//             candidate = num;
//         }
//         freq += (num === candidate) ? 1 : -1;
//     }
//     return candidate;
// }
// console.log(majorityElement([1,2,1,2,1,2,1,2,1])) 

// 2nd approach of mor's voting algorithm
function majorityElement(arr){
    let freq = 0; let ans = 0;
    for(let num of arr){
        if(freq === 0){
            ans = num;
        }
        if(num === ans){
            freq++;
        }else{
            freq--;
        }
    }
    let count = 0;
    for(let num of arr){
        if(num === ans){
            count++;
        }
    }
    return count > arr.length/2 ? ans : null;   
}
console.log(majorityElement([2,2,1,1,2]))
