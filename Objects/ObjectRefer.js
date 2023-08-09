//Object Reference || Shallow Copy

const killer1 = {
  name: "John Wick",
  age: 40,
  address: {
    city: "Los Angeles",
    state: "California",
  },
  kills: 453,
};

const killer2 = killer1;

console.log("Before Update killer1", killer1);
console.log("Before Update killer2", killer2);

killer2.kills = 654;

console.log("After Update killer1", killer1);
console.log("After Update killer2", killer2);

// Object Assign || Not good for Nested Obj

const killer3 = Object.assign({}, killer1);

killer3.kills = 771;

console.log("Object Assign killer3", killer3);

killer3.address.city = "Las Vegas";
killer3.address.state = "Nevada";

console.log("After killer3 update killer1 ->", killer1);
console.log("After killer3 update killer2 ->", killer2);
console.log("After killer3 update killer3 ->", killer3);
