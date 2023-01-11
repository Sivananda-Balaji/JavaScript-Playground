// var  - can be re-declare and update, Function Scope
var message = "Line Updated";
console.log(message);
var message = "This is a new message.";
console.log(message);


//let - can be update , can't be re-declare, Block Scope

let greetings;
greetings = "Good Morning!";
console.log(greetings);
greetings = "Good Afternoon";
console.log(greetings);
//let greetings = "Good Evening"; - This is a re-declaration , can't be allowed.

//const - can't be re-declare, can't be update , Block Scope

const piValue = 3.14;
console.log(piValue);


/* const piValue = 4.34;
piValue = 4.34;
console.log(piValue); */


// semi-colon is not required in the end if you are not wriring everything in a single line.

/*
Good Naming Conventions
1. Variable name should be meaning to the information to be store.
2. variable name should start with small letter and use camel case convention if there are more than one word.
3.variable can start with dollar($) and underscore (_).
4. variable do not contains any special charaters.
5.varibale should not start with numbers. Numbers can be include at the end of the variable name. 

*/