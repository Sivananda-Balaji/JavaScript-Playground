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
  likes: "Dog",
  greetMessage: function () {
    console.log(`Welcome to ${this.address.city}`);
  },
};

console.log(killer1.address?.city);

killer1.greetMessage();

console.log(killer1.greetName?.());
