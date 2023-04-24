/**
 * Array - Copy Reference || Shallow Copy
 */

let arr1 = [2, 46, 87, 34];
let arr2 = arr1;

console.log(`Arr1 -> ${arr1}`);
console.log(`Arr2 -> ${arr2}`);

arr1.push(55);

console.log(`Arr1 -> ${arr1}`);
console.log(`Arr2 -> ${arr2}`);

arr2.push(98);

console.log(`Arr1 -> ${arr1}`);
console.log(`Arr2 -> ${arr2}`);

//Spread Operator || Deep Copy
console.log("-------------");
let arr3 = [...arr1];

arr3.push(100);

console.log(`Arr1 -> ${arr1}`);
console.log(`Arr2 -> ${arr2}`);
console.log(`Arr3 -> ${arr3}`);

// nested array - Json parse will work fine

let arr4 = [1, 2, [3, 4, [5, 6]]];

let arr5 = JSON.parse(JSON.stringify(arr4));

arr5[0] = 100;
arr5[2][0] = 300;
arr5[2][2][0] = 500;

console.log(`Arr4 -> ${arr4}`);
console.log(`Arr5 -> ${arr5}`);

// deep copy with function  - arr4 = [1,2,[3,4,[5,6]]];

function deepCopyArray(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      copy[i] = deepCopyArray(arr[i]);
    } else {
      copy[i] = arr[i];
    }
  }
  return copy;
}

let arr6 = deepCopyArray(arr4);

arr6[2][0] = 150;

console.log(`Arr4 -> ${arr4}`);
console.log(`Arr6 -> ${arr6}`);
