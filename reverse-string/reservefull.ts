function maxSum(arr){
    const maxArr = arr.slice();
    maxArr[1] = Math.max(arr[0],arr[1]);
    for(let i = 2; i< arr.length; i++){
        maxArr[i] = Math.max(maxArr[i-1], maxArr[i-2] + arr[i])
        maxArr
    }

}

// maxArr = [7,10,19,]

console.log(maxSum([7,10,12,7,9,14]));