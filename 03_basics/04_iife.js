// Immediately Invoked Function Expression (IIFE)

// ! SYNTAX
// ()();
// semi colons are  VERY important after iffe to end its context

// No pollution from global scope, this has idffrent code
// Executes immediately at app start up

// parathesis around function to and after it toinvoke it immediately
(function chai() {
  console.log(`DB CONNECTED`);
})();
// No need to invoke this chai() function
// chai();

((dbname) => {
  console.log(`DB CONNECTED TWO = ${dbname}`);
})("appdb");

// function chai () is named iife
// second one is innamed iife();
