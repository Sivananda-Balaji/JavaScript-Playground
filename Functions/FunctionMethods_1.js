const arr = [3, 6, 2, 9, 7, 1, 8];

//Testing the arguments

arr.map((num, index, arr) => {
  console.log(`Index: ${index}, Value: ${num}`);
  //console.log(arr) -> This will print the whole array each time
});

const squareValue = arr.map((num) => {
  return num * num;
});

console.log(squareValue);

//filter

const evenValues = arr.filter((num) => {
  return num % 2 == 0;
});

console.log(evenValues);

//reduce

const sum = arr.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);
