/*
currying transforms a function with multiple arguments into a sequence/series of functions each taking a single argument
Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
*/

const multiplyAll = (arr1) => (val) => {
    return arr1.map((item) => item * val);
};

console.log(multiplyAll([1, 2, 3])(2));

const multiply = (number) => (number2) => {
    console.log(number);
    console.log(number2);
    return number * number2;
};

const amultiply = (aa) => (bb) => (cc) => {
    return aa * bb * cc;
};

console.log(amultiply(2));

const mul1 = amultiply(1);
const mul2 = mul1(2);
const result = mul2(3);
console.log(result);

const multiply6 = (num) => {
    const as = num - 2;
    return multiply(as);
};
const mul12 = multiply6(1);
console.log(mul12(2));
