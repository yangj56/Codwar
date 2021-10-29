const multiplyAll = (arr1) => (val) => {
    return arr1.map((item) => item * val);
};

console.log(multiplyAll([1, 2, 3])(2));
