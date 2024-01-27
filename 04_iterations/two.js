// high order loops
// for each, forin, forof

// for of loop

["", "", {}];

const arr = [1, 2, 3, 4, 5];

// iterator ocan be on , array string
for (const iterator of arr) {
  console.log(iterator);
}

const greetings = ["hello", "hola", "namaste", "salam  walekum", "konnichiwa"];

for (const greet of greetings) {
  console.log(greet);
}

// MAPS

//map is also an object in js
// object hold key value pair
const map = new Map();

// map is for unique values and maintains order of insertion
map.set("IN", "INDIA");
map.set("US", "United Stated");
map.set("FR", "France");

for (const [key, value] of map) {
  console.log(key + " " + value);
}

const myObject = {
  game1: "NFS",
  game2: "counter strike 1.6",
  game3: "skyrim",
};

// OBject are not iterable like below
/*
for (const key of myObject) {
  console.log(key);
}
*/

// for in loop directly extract keys
// in arrayas their indexes are keys
for (const key in myObject) {
  console.log(myObject[key]);
}

// for in with arrays
for (const value in arr) {
  console.log(`value ${value} in arr`);
}

// for in with maps// doesnt works because map is not iterable
for (const key in map) {
  console.log(`key in map - ${key}`);
}

// FOR EACH LOOP

const coding = ["JAVA", "JAVASCRIPT", "Ruby", "python", "cpp"];

coding.forEach((element) => {
  console.log(element);
});

printme = (item) => {
  console.log(item);
};

// arrow function passed to pfor  each loop
coding.forEach(printme);
