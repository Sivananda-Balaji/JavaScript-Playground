const str = "The quick brown fox jump over the lazy dog";

//Approach - 1
const removeVowels = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() === "a" ||
      str[i].toLowerCase() === "e" ||
      str[i].toLowerCase() === "i" ||
      str[i].toLowerCase() === "o" ||
      str[i].toLowerCase() === "u"
    ) {
      continue;
    }
    result += str[i];
  }
  return result;
};

console.log(removeVowels(str));

//Approach - 2

const removeVowelsOne = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let val of str) {
    if (!vowels.includes(val.toLowerCase())) {
      result += val;
    }
  }
  return result;
};

console.log(removeVowelsOne(str));
