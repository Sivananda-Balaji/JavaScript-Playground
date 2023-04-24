let [a, b] = [5, 10];

console.log(a, b);

// swqp numbers

[a, b] = [b, a];

console.log(a, b);

// rest operator

let [c, d, ...rest] = [15, 20, 25, 30];

console.log(rest);
