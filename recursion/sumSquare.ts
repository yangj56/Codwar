function sumSquares(arr, n) {
  if (arr.length === 0 || n < 0) {
    return 0;
  }
  const res = arr[n] * arr[n];
  return res + sumSquares(arr, n - 1);
}

console.log(sumSquares([1, 2, 3], 2));
