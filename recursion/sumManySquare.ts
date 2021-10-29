function sumManySquare(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const curVal = arr[i];
    if (Array.isArray(curVal)) {
      sum += sumManySquare(curVal);
    } else {
      sum += curVal * curVal;
    }
  }
  return sum;
}

console.log(sumManySquare([[1, 2], 3]));
