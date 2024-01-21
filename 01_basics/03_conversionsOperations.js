/********************* CONVERSION OF DATATYPES  *************************/

let score = "33";
let score2 = "33abc";
let score3 = null;
let score4 = undefined;
let score5 = true;

console.log(typeof score);
console.log(typeof score2);

// GUranteed for result to be of type number
let valueInNumber = Number(score);
let valueInNumber2 = Number(score2); // String -> NaN
let valueInNumber3 = Number(score3); // null -> 0
let valueInNumber4 = Number(score4); // undefined -> Nan
let valueInNumber5 = Number(score5); // true -> 1

console.log(typeof valueInNumber);
console.log(typeof valueInNumber2);
console.log(valueInNumber2); //  NaN -  Not a number 33abc was convert but to something i.e not a number
console.table([valueInNumber2, valueInNumber3, valueInNumber4, valueInNumber5]);
// smh

// 1 =>  true ; 0 => false
// "" => false
// "ritesh" => true

// STRING TO NUMBER
let someNumber = 33;
let stringNumber = String(33);

console.log(stringNumber);
console.log(typeof stringNumber)


/********************* OPERATIONS *************************/


