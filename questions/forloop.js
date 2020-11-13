// override native console.log
console.log = () => { };

// What is the console output?
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000
    );
}

console.log("########## COMPLETE ##########");


var array = [1, 2, 3, 4, 5]
for (var i = 0; i < array.length; i++) {
    setTimeout(() => {
        console.log(array[i])
    }, 1000);
}

// Because when the settimeout finished the i is already reach value of 5

// Solution 1.create a new function or 2.use let instead of var

for (var i = 0; i < array.length; i++) {
    display(i);
}

function display(value) {
    setTimeout(() => {
        console.log(value)
    }, 1000);
}