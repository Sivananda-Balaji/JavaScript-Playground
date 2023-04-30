let killers = ["John", "Mark", "Jessica", "Amy"];

console.log(killers);
console.log(typeof killers);

console.log("---------------");
//for loop
for (let i = 0; i < killers.length; i++) {
  console.log(killers[i]);
}

console.log("---------------");
// for of loop

for (let name of killers) {
  console.log(name);
}
