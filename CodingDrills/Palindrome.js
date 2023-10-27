const str = "madam";

//Approach - 1
const palindrome = (str) => {
  const reverse = str.split("").reverse().join("");
  return str === reverse;
};

console.log(`Palindrome String: ${palindrome(str)}`);

//Approach - 2
const palindromeOne = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse === str;
};

console.log(`Palindrome String: ${palindromeOne(str)}`);
