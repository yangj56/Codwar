// Give 3 ways to handle state in React Native applications

// What's the difference between Class components and Function components

// How can you interact with native iOS or Android code in React Native applications?

// What's the difference between a regular function and an arrow function in JavaScript

// What's the difference between var, let, and const in JavaScript

function inventoryList() {
  // write your code here
  const inventoryObject = {
    items: new Set(),
    add: function (val) {
      if (!this.items.has(val)) {
        this.items.add(val);
      }
    },
    remove: function (val) {
      this.items.delete(val);
    },
    getList: function () {
      if (this.items.size >= 1) {
        const setArr = Array.from(this.items.values());
        return setArr.join(",");
      }
    },
  };
  return inventoryObject;
}

const val = inventoryList();
console.log(val.add("item"));
console.log(val.add("item"));

console.log(val.add("oak"));
console.log(val.add("oak"));

console.log(val.remove("oak"));
console.log(val.add("item"));

console.log(val.add("oak"));
console.log(val.add("oak"));

console.log(val.getList());

console.log(val.items);

const sts = "a12b2c32";

const asd = sts.split(/(\d+)/);

asd;
