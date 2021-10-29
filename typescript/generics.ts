// Generics

// Array

// ------------------------ Topics: 2 generics, return, overwrite inference to be like a tuple, default type if we dont set any
type numArray = Array<number>;
const arrayObject: numArray = [1, 3];

const last = (arr: Array<number>): number => {
    return arr[arr.length - 1];
};

const l1 = last([1, 2, 3]);

// So if weant to use last for string we need use generics

// here T is a generic type that will be passed to our function
const lastGeneric = <T>(arr: Array<T>): T => {
    return arr[arr.length - 1];
};

// so now if we use with string or number it will auto type
// typescript will infer automatically
const lNumber = lastGeneric([1, 2, 3]);

const lString = lastGeneric(['23', 'tst', 'sdf']);

// we can have multiple generics

const makeArr = <T, Y>(input: T, input2: Y) => {
    return [input, input2];
};

// we will have an arry of unions, but this type definition is wrong because it is more like a tuple rather than an union array
const combineArr = makeArr(3, 'test');

// so, we explicit determine the response
const makeArrExplicit = <T, Y = string>(input: T, input2: Y): [T, Y] => {
    return [input, input2];
};

const combineArrExp = makeArrExplicit(3, 'test');

// or we can type it by the calling function

const combineArrCall = makeArrExplicit<number, string>(3, 'test');

// if we only set one type instead of type, we need to set the 2nd type with default type, so Y = string
const combineArrCallsingle = makeArrExplicit<number>(3, 'sdf');

// ------------------------ Topics: extends

// We can create a T type and set a base object properties and this will allows us to include other properties such as age, gender etcs
const makeFullName = <T extends { firstName: string; lastName: string }>(
    obj: T
) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName,
    };
};

const fullNameObject = makeFullName({
    firstName: 'Test',
    lastName: 'Shok',
    gender: false,
});

interface Tab<T> {
    id: string;
    position: number;
    data: T;
}

const numberTab = <T>(obj: Tab<T>) => {
    return obj.id;
};

console.log(
    numberTab<string>({ id: 'test', position: 1, data: 'test' })
);
