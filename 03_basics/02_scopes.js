let a = 10;
const b = 20;
if (true) {
  var c = 30;
}
var c = 300;
console.log(a);
console.log(b);
console.log(c);

// create  a block scope
{
  /* Scope starts here */
  /* scope ends here*/
}

// with var we can redeclare variablesand previous value will be over writter
// var is global scope
// var works as a double edged sword

// let is scoped
// const is scoped

// ! global scope is different for browser and node env scope

/* ========================================================================= */
// MORE ON SCOPES

// ! nested scopes

function one() {
  const username = "ritesh";

  function two() {
    // ! function inside a function :O
    // :* java developers going crazy
    const website = "github";
    console.log(username);
  }
  // invoke two
  two();

  // cannot access this website wont be defined becuase it belongs
  // to inner function
  //   console.log(website);
}

one();

// nested functions are like inner classes in java
// inner function can access everything from outer function
// but outer function cannot access anything from inner function

/ *=================== */;

if (true) {
  const username = "ritesh";
  if (username === "ritesh") {
    const website = " youtube";
    console.log(username + website);
  }
  // wont work
  //  ! console.log(website);
}

/* ********* interesting *********** */

// THIS IS CALLED AS BASIC FUNCTION
function addone(num) {
  return num + 1;
}

console.log(addone(5));

// THIS IS CALLED AN EXPRESSION
const addTwo = function (num) {
  return num + 2;
};

// Expression must be declared and defined before being use
console.log(addTwo(5));
