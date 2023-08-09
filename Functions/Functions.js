//Named Function or Function Declaration

greetCity("Texas");

function greetCity(city) {
  console.log(`Welcome to ${city}, Greetings!!`);
}

greetCity("Los Angeles");

//Anonymous Function or Function Expression

console.log(`declared with var ${greet}`);
//greet();
var greet = function () {
  console.log("Welcome, Greetings!! - Anonymous Function");
};
greet();

// Arrow Function - same as anonymous function

console.log(`declared with var arrow ${greetArrow}`);
//greetArrow();
var greetArrow = function () {
  console.log("Welcome, Greetings!! - Arrow Function");
};

greetArrow();
