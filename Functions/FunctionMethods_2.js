const arr = [2, 5, 9, 6, 4];

const obj = {
  doubleValue: function (num) {
    return num ** 2;
  },
  evenValue: function (num) {
    return num % 2;
  },
};

const res = arr.map(function (num) {
  return this.doubleValue(num);
}, obj);

console.log(res);

const result = arr.filter(function (num) {
  return this.evenValue(num) === 0;
}, obj);

console.log(result);
