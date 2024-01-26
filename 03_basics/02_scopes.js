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
