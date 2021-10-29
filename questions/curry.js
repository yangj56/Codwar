import assert from "assert";

const createBase = (number) => {
    number
    return (number2) => {
        return number + number2;
    }
}

const addSix = createBase(6);

addSix(32);

console.log("########## COMPLETE ##########");
