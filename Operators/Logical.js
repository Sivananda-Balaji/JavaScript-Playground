/**
 * Logical Operator
 * AND - &&
 * OR - ||
 * NOT - !
 * Nullish Coalescing
 */

let english = 80;
let maths = 70;
let science = 60;

// AND - return true if everything is true
console.log(`AND operation`);

if (english >= 80 && maths >= 80 && science >= 80) {
  console.log("A grade Student");
} else {
  console.log("B grade Student");
}

// OR - Return true if any one of the condition is true
console.log(`OR operation`);

if (english >= 80 || maths >= 80 || science >= 80) {
  console.log("Ok grade Student");
} else {
  console.log("B grade Student");
}

// NOT - Reverse the boolean value
console.log(`NOT operation`);

let isStudent = false;

if (!isStudent) {
  console.log(`isStudent value: ${isStudent}`);
}
