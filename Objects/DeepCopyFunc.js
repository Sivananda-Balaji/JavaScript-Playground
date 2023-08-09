//function - Deep Copy

const killer1 = {
  name: "John Wick",
  age: 40,
  address: {
    city: "Los Angeles",
    state: "California",
    landMark: {
      filmCity: "Venture",
    },
  },
  kills: 453,
};

console.log(killer1);

function target(source) {
  const temp = {};
  for (const key in source) {
    if (typeof source[key] === "object") {
      temp[key] = target(source[key]);
    } else {
      temp[key] = source[key];
    }
  }
  return temp;
}

const killer2 = target(killer1);

console.log(killer2);

killer2.address.landMark = "New Venture";

console.log("Killer1 ", killer1);

console.log("killer2 ", killer2);
