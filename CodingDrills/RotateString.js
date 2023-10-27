const str = "welcome";

const rotateStr = (str, pos) => {
  if (pos <= 0) {
    return str;
  }
  pos = pos % str.length;
  const charArr = str.split("");
  for (let i = 0; i < pos; i++) {
    charArr.push(charArr.shift());
  }
  return charArr.join("");
};

console.log(rotateStr(str, 4));
