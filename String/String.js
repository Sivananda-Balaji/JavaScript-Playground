
let text1 = "First Way";

let text2 = String("Second Way");

let text3 = new String("Third Way");

console.log(`${text1} -> ${typeof text1}`);
console.log(`${text2} -> ${typeof text2}`);
console.log(`${text3} -> ${typeof text3}`);


let message = "Greetings!";


for(let i=0;i<message.length;i++){
    console.log(message[i]);
}

console.log("------------");

for(let char of message){
    console.log(char);
}

console.log("------------");

for(let index in message){
    console.log(message[index]);
}


