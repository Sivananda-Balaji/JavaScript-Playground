function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  }
  let rangeArr = rangeOfNumbers(startNum, endNum - 1);
  rangeArr.push(endNum);
  return rangeArr;
}

console.log(rangeOfNumbers(1, 5));
