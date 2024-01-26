// ********* DATES IN JS
// First dates start from epoch time i.e. 1 January 1970

let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toISOString());
console.log(mydate.toUTCString());

console.log("-----------");
// !Months start from 0, :P lol js is weird
let myCreatedDate = new Date(2024, 0, 23);

console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("2023-01-14");
console.log(myCreatedDate2.toLocaleString());

// Current time in ms
let myTimeStamp = Date.now();

// Number
console.log(typeof myTimeStamp);

// Timestamp from exsiting date object
console.log(myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

console.log(newDate.toLocaleDateString("default", { weekday: "long" }));
