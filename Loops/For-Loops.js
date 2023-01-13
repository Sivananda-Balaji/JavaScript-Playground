/**
 * For loop  - To execute the statement finite number of times
 */

/*for(Startvalue; condition; increment / decrement ){
    // This Statements will execute until the condition is true
} */

// numbers
for(let i=0;i<10;i++){
    console.log(i);
}
console.log("------------")

for(let i=1;i<=5;i++){
    console.log(`${i} : Hello, Good Morning!`)
}

console.log("------------")

let userName = "John Wick";
for(let i=0;i<userName.length;i++){
    console.log(userName[i]);
}
console.log("------------")
// multiplication table

for(let i=1;i<=10;i++){
for( let j=1;j<=10;j++){
    console.log(`${i} x ${j} = ${i*j}`)
}
console.log("----")
}