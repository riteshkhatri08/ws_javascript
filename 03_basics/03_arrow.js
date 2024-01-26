/* Arrow Functions */

const user = {
  username: "RITESH",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // print current context
    console.log(this);
  },
};

//
// "this" // refers to current context ;

user.welcomeMessage();

// changed context
user.username = "Sam";

// this referrenig to updated context
user.welcomeMessage();

// empty current context for node environment
console.log(this);

// Insnide browser window object is project inside current context

function chai() {
  let username = "ritesh";
  // lots of values for current context
  console.log(this);
  // works on objects ,
  //   console.log(this.username)
}

chai();

// Arrow function
const coffee = () => {
  let username = "ritesh";
  // empty context for arrow function
  console.log(this);
};

coffee();

/* 
arrow function syntax
() => {};
*/
// store arrow function inside a vairable
const addThree = (a, b, c) => {
  return a + b + c;
};
console.log(addThree(1, 2, 3));

/// implicit return , no bracesand return statement
// use paranthesis
// similar to lambda functions in java
const addAgain = (num1, num2) => num1 + num2;

console.log(addAgain(1, 2));

sum = 0;
[1, 2, 3, 4].forEach((a) => (sum += a));
console.log(sum);
