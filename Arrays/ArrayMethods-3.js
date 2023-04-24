let vacation = [
  "Miami",
  "Washington D.C",
  "Grand Canyon",
  "Las Vegas",
  "Aspen",
  "Seattle",
];

console.log(vacation.includes("Yellowstone"));

console.log(vacation.includes("Aspen"));

console.log(vacation.sort());

//Split and Join

const userName = "madam";

const reverseName = userName.split("").reverse().join("");

console.log(userName === reverseName);
