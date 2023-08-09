const killer1 = {
  name: "John Wick",
  age: 40,
  likes: "Dog",
  skills: ["guns", "Knife", "boxing", "driving"],
  address: {
    city: "Los Angeles",
    state: "California",
    landMark: {
      Park: "Griffith",
    },
  },
};

let { name: newName, age, skills, likes } = killer1;
//order doesn't matter here. to rename use :
console.log(`name: ${newName} , skills: ${skills}`);

let {
  address: { city, state, landMark },
} = killer1;

console.log(`${city}, ${state},`, landMark);

// short hand

const userName = "Amanda";

const userCity = "Las Vegas";

console.log({ userName, userCity });
