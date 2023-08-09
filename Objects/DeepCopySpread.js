// Deep Copy || Spread Operator || not good for nested obj

const killer1 = {
  name: "John Wick",
  age: 40,
  address: {
    city: "Los Angeles",
    state: "California",
  },
  kills: 453,
};

const killer2 = { ...killer1 };

console.log("Before Update killer1", killer1);
console.log("Before Update killer2", killer2);

killer2.kills = 981;

console.log("After Update kills, killer1", killer1);
console.log("After Update kills, killer2", killer2);

killer2.address.city = "Las Vegas";
killer2.address.state = "Nevada";

console.log("After Update Nested Obj, killer1", killer1);
console.log("After Update Nested Obj, killer2", killer2);

// spread nested object performs the deep copy

const killer3 = { ...killer1, address: { ...killer1.address } };

console.log(killer3);
