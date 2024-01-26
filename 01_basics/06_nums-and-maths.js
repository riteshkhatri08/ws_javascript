const score = 400; //

// define explicitly but it;s type would be object
const balance = new Number(100);
console.log(typeof balance);
console.log(balance);

// Number fucntions
console.log(balance.toFixed(4 /* precision value */));

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000000;
console.log(hundreds.toLocaleString("en-IN" /* indian english */));

// MAX VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

/****************************** MATHS***********************/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.ceil(5.6));
console.log(Math.floor(5.6));

console.log(Math.min(4, 5, 6, 7));
console.log(Math.max(4, 5, 6, 7));
console.log(Math.random() * 10 + 1);

console.log(Math.floor(Math.random() * 10 + 1));
const min = 10;
const max = 20;

// To get random value in a range

console.log(Math.floor(Math.random() * (max - min + 1) ));
