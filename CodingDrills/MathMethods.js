//round
console.log(Math.round(2.4));

console.log(Math.round(2.5));

//floor
console.log(Math.floor(2.4));

console.log(Math.floor(2.9));

//ceil
console.log(Math.ceil(2.4));

console.log(Math.ceil(2.1));

//random

console.log(Math.floor(Math.random() * 10));

const min = 2;
const max = 10;

// to exclude max and include min - 2 to 9

console.log(Math.floor(Math.random() * (max - min)) + min);

// to include both min and max - 2 to 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
