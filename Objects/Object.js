const killer = {
  name: "John Wick",
  age: 40,
  job: "Hitman",
  skills: ["guns", "Knife", "boxing", "driving"],
  excuted: false,
  greet: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
  displayName() {
    console.log(`My Name is ${this.name}`);
  },
};

killer.city = "New York";

console.log(killer);

console.log(killer.name);

console.log(killer["job"]);

killer.greet();
killer.displayName();

console.log(`in operator -> ${"skills" in killer}`);

for (const val in killer) {
  console.log(`${val}: ${killer[val]}`);
}
