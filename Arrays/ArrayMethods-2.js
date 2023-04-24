//pop - Remove the last item in an array and return that element

let cities = [
  "Los Angeles",
  "New York",
  "San Francisco",
  "Austin",
  "Louisville",
];

console.log(cities);

console.log(cities.pop());

console.log(cities);

// slice - start number - end number-1

console.log(cities.slice(1, 3));

// splice - start number - delete number

console.log(cities.splice(3, 1, "New Orlens"));
console.log(cities);
