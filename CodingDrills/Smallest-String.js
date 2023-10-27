/*
Print the smallest string from the 3 strings
 */

let string_1 = "a good day to run";
let string_2 = "This is a revolution";
let string_3 = "Karma has no menu, you get served what you deserve";

let strLen1 = string_1.length;
let strLen2 = string_2.length;
let strLen3 = string_3.length;

if (strLen1 < strLen2 && strLen1 < strLen3) {
  console.log(`Smallest String : ${string_1}`);
} else if (strLen2 < strLen3 && strLen2 < strLen1) {
  console.log(`Smallest String : ${string_2}`);
} else if (strLen3 < strLen1 && strLen3 < strLen2) {
  console.log(`Smallest String : ${string_3}`);
} else {
  console.log(`Two or more string have same length.`);
}
