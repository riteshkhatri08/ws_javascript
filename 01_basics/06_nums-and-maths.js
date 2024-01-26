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



