// Objects i js

// declared in two ways, literal or constructor
// creating it using a constructor creates a singleton

const mySym = "key1";

// Object literals
// curly braces for empty object ,
const user = {
  firstname: "Ritesh",
  lastname: "khatri",
  class: "12th",
  age: 25,
  [mySym]: "myValue1",
  location: "Indore",
  email: "ritesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

/// Can access usingkeys using [] or with '.' notation

console.log(user.email);
console.log(user["email"]);

// Throws error
// console.log(user.class);

console.log(typeof user[mySym]);

// To prevent changes to values
// Object.freeze(user);
// user.email = "ritesh@oracle.com";

console.log(user);

// we can also store functions in variables , we cans tor efunctions in objects

user.greeting = function () {
  console.log(`Hello, My name is ${this.firstname}.`);
};

user.greeting();
