// ... - Spread Operator

let arr1 = [1, 2, 3, 4];

let arr2 = [5, 6, 7];

let arr3 = [...arr1, ...arr2, 8, 9, 10];

//console.log(arr3);

//example

function sum(...nums) {
  let res = nums.reduce((total, num) => {
    return total + num;
  });

  console.log(res);
}

let nums = [3, 4, 7, 2, 1, 5, 2, 7, 4];
sum(...nums);
