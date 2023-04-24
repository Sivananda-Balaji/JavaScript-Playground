// More use of logical operator

let firstName = "James";
let lastName = "Bond";
let fatherName = "Miller";

// In the below statement, father's name will print if the last name is empty.
console.log(`The Name is ${firstName} ${lastName || fatherName}`);
console.log(`The Name is ${firstName} ${lastName && fatherName}`);

/**
 truthy - "a",1
 falsy - "" , 0 , null , undefined

 Short circuiting
 OR - Search for first truth value and return, if the truthy value is not found return the last falsy value.
 AND - Search for first falsy value and return, if the falsy value is not found return the last truthy value.

 */

console.log("--------------------");

/**
 * Nullish coalescing
 * Nullish coalescing (??) - will look for another value if the first value is either undefined or null
 */

let num = 0;
let num2;

console.log(num ?? 1);
console.log(num2 ?? 1);
