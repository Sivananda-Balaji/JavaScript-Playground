
// Star Pattern
for(let i=1;i<=5;i++){
    let string1 = "";
    for(let j=0;j<i;j++){
        string1 +="* ";
    }
    console.log(string1);
}

console.log("----------------");

//Reverse Star

for(let i=5;i>=1;i--){
    let string1="";
    for(let j=i;j>=1;j--){
        string1 +="* ";
    }
    console.log(string1);
}

console.log("----------------");

// Square Star

for(let i=0;i<5;i++){
    let string1 = "";
    for(let j=0;j<5;j++){
        string1 +="* "
    }
    console.log(string1);
}

console.log("----------------");

// Hollow Square Star

for(let i=1;i<=5;i++){
    let string1="";
    for(j=1;j<=5;j++){
        if(i===1 || i===5){
            string1 +="* ";
        }else {
            if(j===1 || j===5){
                string1 +="* "
            }else {
                string1 +="  ";
            }
        }
    }
    console.log(string1);
}


console.log("----------------");

// Right Triangle Star

for(let i=5;i>=1;i--){
    let string1="";
    for(let j=1;j<=5;j++){
        if(i<=j){
            string1+="* "
        }else {
            string1 +="  "
        }
    }
    console.log(string1);
}

console.log("----------------");

// Right reverse Triangle Star

for(let i=5;i>=1;i--){
    let string1="";
    for(let j=5;j>=1;j--){
        if(i>=j){
            string1+="* "
        }else {
            string1 +="  "
        }
    }
    console.log(string1);
}
