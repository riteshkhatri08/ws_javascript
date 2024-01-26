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
