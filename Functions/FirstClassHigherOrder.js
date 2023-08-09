// First class - assigning variable

const generalGreet = function () {
  return "Welcome to Los Angeles!!";
};

console.log(generalGreet());

//Function as Argument

function nameGreeting(name, func) {
  console.log(`${name}, ${func()}`);
}

nameGreeting("Ashley", generalGreet);

// Returning a Function

function displayInfo(name, kills) {
  return function () {
    console.log(`My Name is ${name} and Total Kills: ${kills}`);
  };
}

const result = displayInfo("Grace", 434);

result();

displayInfo("Lizzie", 342)();
