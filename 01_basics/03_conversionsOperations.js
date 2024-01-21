/********************* CONVERSION OF DATATYPES  *************************/

let score = "33";
let score2 = "33abc";
let score3 = null;
let score4 = undefined;
let score5 = true;

// console.log(typeof score);
// console.log(typeof score2);

// GUranteed for result to be of type number
let valueInNumber = Number(score);
let valueInNumber2 = Number(score2); // String -> NaN
let valueInNumber3 = Number(score3); // null -> 0
let valueInNumber4 = Number(score4); // undefined -> Nan
let valueInNumber5 = Number(score5); // true -> 1

// console.log(typeof valueInNumber);
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2); //  NaN -  Not a number 33abc was convert but to something i.e not a number
// console.table([valueInNumber2, valueInNumber3, valueInNumber4, valueInNumber5]);
// smh

// 1 =>  true ; 0 => false
// "" => false
// "ritesh" => true

// STRING TO NUMBER
let someNumber = 33;
let stringNumber = String(33);

// console.log(stringNumber);
// console.log(typeof stringNumber)

/********************* OPERATIONS *************************/
console.log("********************* OPERATIONS *************************");

// NEGATIVE VALUE
let value = 3;
let negValue = -value;
// console.log(negValue);

// NUMBER TO NUMBER OPERATION
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2); // POWER
// console.log(2 / 2);
// console.log(2 % 2); // MODULUS

// STIRNG TO STRING OPERATION
let str1 = "hello";
let str2 = " ritesh";

let str3 = str1 + str2;
console.log(str3);

// STRING TO NUMBER and VICE VERSA OPERATION

// console.log ("1" + 2); // 12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// REFER- 7.1.1 ToPrimitive ( input [ , preferredType ] ) at https://tc39.es/ecma262/

// console.log(+true); // ! 1 , valid expressipon but not preferred true was converted to number 1 becuase of '+' before the operand

//  Below is valid but not preferref as it is not readable
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

// REFER - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
let gameCounter = 100;
gameCounter++; // postfix operator
++gameCounter; // prefix counter
console.log(gameCounter);
