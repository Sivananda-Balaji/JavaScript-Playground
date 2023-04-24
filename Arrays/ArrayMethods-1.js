let fruits = ["Apples", "Oranges", "Pineapple", "Kiwi"];

console.log(fruits);

console.log(fruits.push("Strawberry")); // returns the length of the array

console.log(fruits);

fruits.push("Blueberries", "Grapes", "Watermelon");

console.log(fruits);

console.log(fruits.shift());

console.log(fruits.unshift("Apples", "Green Apple"));

console.log(fruits);

// Concat Method

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let arr4 = arr1.concat(arr2, arr3);

console.log(arr4);
