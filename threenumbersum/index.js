function threeNumberSum(array, targetSum) {
    const hashset = new Set(array);
    const resultArr = [];
    // Write your code here.
    for (let i = 0; i < array.length; i++) {
        const iCurVal = array[i];
        const remainder = targetSum - iCurVal;
        for (let j = i + 1; j < array.length; j++) {
            const jCurVal = array[j];
            const finder = remainder - jCurVal;
            if (hashset.has(finder) && (finder !== iCurVal || finder !== jCurVal)) {
                resultArr.push([iCurVal, jCurVal, finder]);
            }
        }
    }
    return resultArr;
}

function threeNumberSum2(array, targetSum) {
    const sortedArr = array.sort((a, b) => a - b);
    sortedArr;
    const resultArr = [];
    for (let i = 0; i < sortedArr.length; i++) {
        const curVal = sortedArr[i];
        let left = i + 1;
        let right = sortedArr.length - 1;
        while (left < right) {
            const sum = curVal + sortedArr[left] + sortedArr[right];
            curVal;
            console.log(sum);
            console.log(sortedArr[left]);
            console.log(sortedArr[right]);
            if (sum === targetSum) {
                resultArr.push([curVal, sortedArr[left], sortedArr[right]]);
                left++;
                right--;
            } else if (sum < targetSum) {
                left++;
            } else {
                right--;
            }
        }
    }
    return resultArr;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

console.log(threeNumberSum2([12, 3, 1, 2, -6, 5, -8, 6], 0));

function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    let small = undefined;
    let result = [];
    for (let i = 0; i < arrayOne.length; i++) {
        const curi = arrayOne[i];
        for (let j = 0; j < arrayTwo.length; j++) {
            const curj = arrayTwo[j];
            const dif = Math.abs(curi - curj);
            console.log(dif);
            if (small === undefined || dif < small) {
                small = dif;
                result = [curi, curj];
            }
        }
    }
    return result;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
