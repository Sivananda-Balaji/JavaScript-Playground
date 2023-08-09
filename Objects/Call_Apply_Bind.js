const killer1 = {
  name: "John Wick",
  age: 40,
};

const killer2 = {
  name: "Jennifer",
  age: 38,
};

const killer3 = {
  name: "Amanda",
  age: 48,
};

function dispName() {
  console.log(`My Name is ${this.name}`);
}

function showInfo(kills, likes) {
  console.log(
    `My Name is ${this.name}. I like ${likes}. Kill count is ${kills}`
  );
}

//No arguments - call
console.log("-------Call-----");
dispName.call(killer1);
dispName.call(killer2);

//Arguments
showInfo.call(killer1, 334, "Dogs");
showInfo.call(killer2, 675, "Bears");

//No Arguments - Apply
console.log("-------Apply-----");
dispName.apply(killer1);
dispName.apply(killer2);

//Arguments

showInfo.apply(killer1, [334, "Dogs"]);
showInfo.apply(killer2, [675, "Bears"]);

// No Arguments
console.log("-------Bind-----");

const result = dispName.bind(killer1);
result();

//Arguments

const result1 = showInfo.bind(killer2);
result1(967, "Cats");
