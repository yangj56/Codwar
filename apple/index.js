/**
 calculate the array's continous number to form the target value
 */

function collectApple(arr, target) {
  if (arr.length === 0) {
    return arr;
  }
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      const result = sumArr(arr.slice(i, j), target);
      if (!result) {
        break;
      }
      if (result.length > 0) {
        return result;
      }
    }
  }
  return [];
}

function sumArr(arr, target) {
  const sum = arr.reduce((prev, current) => prev + current);
  if (sum === target) {
    return arr;
  } else if (sum > target) {
    return null;
  } else {
    return [];
  }
}

// console.log(collectApple([2, 3, 4, 5, 6, 2, 3], 23)); // [2,3,4]

console.log(collectApple([2, 3, 4, 5, 6, 2, 3], 7)); // [3,4]
