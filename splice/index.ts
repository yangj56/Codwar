const array = [1, 2, 3, 4, 5, 67, 78, 89];

console.log(array.splice(2, 1)); // remove 3 from the array return the removed value in an array

console.log(array.splice(2, 2, 99, 100, 1000)); // 3rd argument onwards are the element to be replacing the removed one // this return [4,5]
array;
