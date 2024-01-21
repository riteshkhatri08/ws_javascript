// PRIMTIVE DATATYPES
// FOR THESE REFERENCE IS NOT PROVIDED , A copy is mad in stack and that is provided

// 7 TYPES: String, Number, Boolean, null (empty, ekdum khali) ,  undefined (variable declare but no value not even null), Symbol, BigInt

const score = 100;
// TyPES SCRIPT  - js with type sftaey
// const score:number = 100 // for typescript

const scoreValue = 100.3;
const isLoggedIn = false;
const outsidetemp = null;
let userEmail; // undefined

// Difene a symbol
const id = Symbol("123");
const anotherid = Symbol("123");
//  id not same as another id
console.log(id === anotherid); // false

// big int add n after the number
const bigNumber = 99999999999999999999999999989999999n;
console.log(typeof bigNumber);

// REFERENCE DATATYPE(Non primitive)
// A refernce from memory is proivded
//  Array, Object , Functions

const heroes = ["shaktiman", "naagraj", " doga", "flyingjatt"];
const obj = { name: "RITESH", age: 22 };

const myFunction = function () {
  console.log("HELLO JAVASCRIPT");
};

console.log(typeof myFunction);
console.log(typeof outsidetemp); // object for null types

// JS is dynamically typed language becuase we dont need to define type of the variable

// /*********************** MEMEORY MGMT ********  */

// STACK for PRIMITIVE
// A COPY OF VALUE IS RETURN

let myName = "ritesh";
let anotherName = myName; // A COPY OF value of myName was assignrmd to anotherName
anotherName = "riteshkhatri";
console.log(myName);
console.log(anotherName);

// HEAP  for NON -PRIMITIVE
// A REFERENCE TO VALUE Is provded

let userOne = { email: "user@email.com", upi: "user1@oksbi" };
let userTwo = userOne; // A reference pointing to object value in memory is provided

// userOne and userTwo point to same refeence which holds same object in memory
// BEFORE
console.log(userOne);
console.log(userTwo);

userTwo.upi = "user2@okicici";
// AFTER / BOTH ARE CHANGED

console.log(userOne);
console.log(userTwo);
