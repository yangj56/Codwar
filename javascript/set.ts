const ops = new Set();

for (let i = 0; i < 10; i++) {
    ops.add({
        test: i,
    });
}

ops.add({
    test: 1,
});
console.log(ops);

// using object for set is useless since each object is a new reference

console.log(2n > 3 ? 'test' : 'as');

let lib = {
    name: 'ABC',
};

lib['id'] = 5;
lib['id'] = 6; // The value is changed because it is String [KEY]!!

let idex = Symbol('id');

lib[idex] = 1224; //Not changed

console.log(lib[Symbol('id')]);

let user = {
    name: 'John',
};

let id = Symbol('id');

let sd = Symbol('id');
user[sd] = 1;

console.log(user[id]);
