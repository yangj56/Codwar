const greeter = {
    name: "John",

    greet1: () => {
        console.log(`Hello ${this.name}`);
    },

    greet2() {
        console.log(`Hello ${this.name}`);
    }
};


const test = {
    prop: 42,
    func() {
        return this.prop;
    },
};

console.log(greeter.greet1());

console.log(greeter.greet2());

console.log(test.func());

const myFunction = () => {
    console.log(this);
    // this is {} , it is empty cuz of the arrow building
};

function tesdd() {
    console.log(this);
}
// call it
myFunction();
tesdd();

const myObject = {
    myMethod: () => {
        console.log(this);
    }
};

myObject.myMethod();

console.log(this);