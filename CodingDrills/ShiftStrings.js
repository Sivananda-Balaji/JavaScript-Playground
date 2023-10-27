const str = "abcd";

const shiftString = (str, pos) => {
  let shiftedStr = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      code = 97 + ((code - 97 + pos) % 26);
    } else if (code >= 65 && code <= 90) {
      code = 65 + ((code - 65 + pos) % 26);
    }
    shiftedStr += String.fromCharCode(code);
  }
  return shiftedStr;
};

console.log(shiftString(str, 2));
