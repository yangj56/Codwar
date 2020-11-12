// override native console.log
console.log = () => { };

const testEquality = (o1, o2) => {
    return o1 == o2;
};

const testStrictEquality = (o1, o2) => {
    return o1 === o2;
};

const test1 = "1";
const test2 = "1";
const test3 = { key: "Hello World" };
const test4 = { key: "Hello World" };

console.log(testEquality(test1, test2));
console.log(testStrictEquality(test1, test2));
console.log(testEquality(test3, test4));
console.log(testStrictEquality(test3, test4));

console.log(`############ COMPLETE ############`);
