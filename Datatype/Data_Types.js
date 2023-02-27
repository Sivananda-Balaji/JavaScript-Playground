// string  - can be in single quotes and double quotes

let text = "Test String with double quotes";
let text1 = 'Test String with single quotes';
console.log(text);
console.log(text1);
console.log(typeof text,typeof text1);
console.log("string" == typeof text);

console.log("-------------------------------")
// number - can be integer or float value
let num = 100;
let num_1 = 100.5;
console.log(num);
console.log(num_1);
console.log(typeof num,typeof num_1);

console.log("-------------------------------")
//boolean - true/false

let isValue = false;
let isValue_1 = true;
console.log(isValue);
console.log(isValue_1);
console.log(typeof isValue,typeof isValue_1);

console.log("-------------------------------")

//undefined - just declaration alone

let userName;
console.log(userName);
console.log(typeof userName);

console.log("-------------------------------")

//null - no value
let noValue = null;
console.log(noValue);
console.log(typeof noValue);

console.log("-------------------------------")

//object - non primitive data type
let userDetails = {
    userName:"Mark",
    age:34,
    isStudent:false
}
console.log(userDetails);
console.log(typeof userDetails);


//symbol

const symbol = Symbol();

const obj = {
    [symbol] : "oneValue"
}
console.log(obj);


