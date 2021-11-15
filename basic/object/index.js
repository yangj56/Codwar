/* 
javascript object is technically A hash table organizes data so you can quickly look up values for a given key.


Strengths:
    Fast lookups. Lookups take O(1)O(1) time on average.
    Flexible keys. Most data types can be used for keys, as long as they're hashable.
Weaknesses:
    Slow worst-case lookups. Lookups take O(n)O(n) time in the worst case.
    Unordered. Keys aren't stored in a special order. If you're looking for the smallest key, the largest key, or all the keys in a range, you'll need to look through every key to find it.
    Single-directional lookups. While you can look up the value for a given key in O(1)O(1) time, looking up the keys for a given value requires looping through the whole dataset—O(n)O(n) time.
    Not cache-friendly. Many hash table implementations use linked lists, which don't put data next to each other in memory.

If we want orders: A Map Has Ordered Object Keys
*/
const map = new Map();
map.set("mapA", "map-value-1");
map.set("mapB", "map-value-2");
map.set("mapC", "map-value-3");

const object = {
  objectA: "object-value-1",
  objectB: "object-value-2",
  objectC: "object-value-3",
};

for (const [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value}`);
}

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

const array = ["array-value-1", "array-value-2", "array-value-3"];

const set = new Set();
set.add("set-value-1");
set.add("set-value-2");
set.add("set-value-3");

console.log(map);
console.log(object);
console.log(array);
console.log(set);

// object to map

// object to arr

// arr to set
const simpleArr = [55, 44, 65];
const setArr = new Set(simpleArr);
setArr;

// arr to object
const arryObject = Object.assign({}, ["a", "b", "c"]); // {0:"a", 1:"b", 2:"c"}
arryObject;
// arr to map

// map sort
const sortedMap = new Map([...map.entries()].sort());

// map to arr, string
const mapArray = [];
for (const [key, value] of sortedMap) {
  mapArray.push(key);
  mapArray.push(value);
}
mapArray;
const mapEasyArr = Array.from(map);
mapEasyArr;

// map to string
let result = "";
for (const [key, value] of sortedMap) {
  result = `${result}${key}${value}`;
}

// map from array
const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];
const myMap = new Map(kvArray);
myMap.get("key1"); // returns "value1"

console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray
console.log([...myMap]);
console.log(Array.from(myMap.keys())); // ["key1", "key2"]

// map to object

// map to set

// iterate map

// set to array
const arrSet = Array.from(set);
arrSet;
