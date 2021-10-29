export function arrayOfProducts(inputArr: number[]) {
  // Write your code here.
  let resultArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    const resArr = [...inputArr];
    if (i === inputArr.length) {
      resArr.splice(i, -1);
    } else {
      resArr.splice(i, 1);
    }

    const total = product(resArr);
    total;
    resultArr.push(total);
  }
  return resultArr;
}

function product(arr: number[]) {
  arr;
  return arr.reduce((prev, cur) => prev * cur);
}

console.log(arrayOfProducts([5, 1, 4, 2]));
