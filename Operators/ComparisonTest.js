// two number string

let val1 = "10";
let val2 = "15";

console.log(val1 > val2);
console.log(val1 < val2);
console.log(val1 >= val2);
console.log(val1 <= val2);
console.log(val1 == val2);
console.log(val1 === val2);

console.log("------------");
//one string and one number

let num1 = 20;
let num2 = "b";

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 === num2);

console.log("------------");
// two strings

let str1 = "hello";
let str2 = "helloa";

console.log(str1 > str2);
console.log(str1 < str2);
console.log(str1 >= str2);
console.log(str1 <= str2);
console.log(str1 == str2);
console.log(str1 === str2);

console.log("------------");

// null and number comparison
/**
 * null acts as zero - comparee with number
 * null - string - all return false
 */
let value1 = null;

let value2 = 1;

console.log(value1 > value2);
console.log(value1 < value2);
console.log(value1 >= value2);
console.log(value1 <= value2);
console.log(value1 == value2);
console.log(value1 === value2);

console.log("------------");

// null and undefined

let one = null;
let two = undefined;

console.log(one == two);
console.log(one === two);

console.log("------------");

// undefined comparison

let newValue;
let oldValue = 20;
let oldVal = "value";

console.log(newValue >= oldValue);
console.log(newValue <= oldValue);

console.log(newValue >= oldVal);
console.log(newValue <= oldVal);

console.log("------------");
