const str = "98765432123456789";
//Approach - 1
const maskChar = "#".repeat(4);
const result = str.slice(0, str.length - 4) + maskChar;

console.log(`Built-in Methods: ${result}`);

//Approach - 2

const maskingFunc = (str) => {
  let result = "";
  for (let i = 0; i < str.length - 4; i++) {
    result += str[i];
  }
  return result + maskChar;
};

console.log(`For Loop: ${maskingFunc(str)}`);
