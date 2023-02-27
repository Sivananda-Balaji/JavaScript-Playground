// Comparison Operator returns boolean

// Greater than or Less than
console.log("Greater than/Less than");
let num1 = 5;
let num2 = 8;
console.log(num1>num2); // false
console.log(num1<num2); // true

//Greater/Less than or equal to
console.log("Greater than/Less than or Equal to");
let num3 = 56;
let num4 = "97";
let num5 = "56";

console.log(num3>=num4); // false
console.log(num3<=num4); // true
console.log(num3>=num5); // true

// doule equal to triple equal to
console.log("Equality and Strict Equality");
let num6 = 45;
let num7 = "45";
console.log(num6==num7); // true
console.log(num6===num7); //false
console.log(num6!==num7); // true
console.log(num6!=num7) // false

/*
Doule Equal to check the value between the two varible.
Trple equal to cheks the value and the data type between the two variable.
*/

// null and undefined
/*
 When you compare the null with the number, the null acts as a zero and checks with the value.
 However if you try to compare with the zero it acts as a null.

 */
console.log("Null and Undefined");
let value = null;
let value_1;
let value_2 = 22;
console.log(value == value_1); // true
console.log(value === value_1) // false
console.log(value>=value_2); // false
console.log(value<=value_2); // true
console.log(value==0); // false
console.log(value===0); //false
// if you try to compare the any value with undefined it will return false
console.log(value_1>=value_2);
console.log(value_1<=value_2);
console.log(value_1==value_2);
console.log(value_1===value_2);