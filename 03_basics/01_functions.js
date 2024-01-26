// Functions in java scripts

// Define function
function sayMyName() {
  console.log("HEISENBERG");
}

// invoke function
sayMyName();

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

const result = addTwoNumbers(3, 5);

// undefined becuase function is not returning anything
console.log(result);

function addTwoNum(num1, num2) {
  // return their sum
  return num1 + num2;
}

const res = addTwoNum(3, 5);
console.log(res);

// const sumfunc = (a, b) => {
//   return a + b;
// };

// console.log(sumfunc(1,2));
// Yiu can also set a default value
function loginUserMessage(username = "John Doe") {
  if (username === undefined) {
    console.log("Please pass a username in argument");
    return;
  }
  return `Hi ${username}, you just logged in`;
}

console.log(loginUserMessage("Ritesh"));

/* ======================================= */

// names should be meaning full and should be verbs
// '...' is called as rest operator when usedbefore method param
// '...' iscalled spread operator when used before element in array or object
// ... is used to access multiple 'n' no of values in input param
function calculateCartPrice(val1, val2, ...morevalues) {
  return val1;
}

console.log(calculateCartPrice(200, 400, 500));

// objects in functions

const userobj = {
  username: "riteshkhatri",
  cartvalue: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and cart value is ${anyobject.carvalue}`
  );
}
handleObject(userobj);

handleObject({ username: "Sam", cartvalue: 399 });

const myArray = [200, 100, 300, 400];

function returnSecondValue(somearray) {
  return somearray[1];
}

console.log(returnSecondValue(myArray));
