function countdown(n) {
  if (n < 1) {
    return [];
  }
  let countArr = countdown(n - 1);
  countArr.unshift(n);
  return countArr;
}

console.log(countdown(10));
