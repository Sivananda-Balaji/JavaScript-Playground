//Pure function - return value is not affected

function getDouble(value) {
  return value * 2;
}

console.log(getDouble(5));

// Impure Function - return value is affected by xValue

let xValue = 3.14;

function getDoublePi(value) {
  return (value * 2 * xValue).toFixed(2);
}

console.log(getDoublePi(5));
