// FILTER MAP and REDUCE

const coding = ["JAVA", "JAVASCRIPT", "Ruby", "python", "cpp"];

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// all values greater than 4 are returned
let newnums = mynums.filter((num) => {
  return num > 4;
});
console.log(newnums);

let myNums2 = [];

// same as above with filter
mynums.forEach((num) => {
  if (num > 4) {
    myNums2.push(num);
  }
});

console.log(myNums2);

// MAP

const newNums3 = mynums.map((num) => num + 10);

console.log(newNums3);

// REDUCE
/*

const array1 = [1, 2, 3, 4];

 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
 Expected output: 10

 */

const myarray = [1, 2, 3, 4, 5];
const initialvalue = 2; // initial value of sum
const arraysum = myarray.reduce((sum, cur) => sum + cur, initialvalue);
console.log(arraysum);
// output 1+2+3+4+5+intitialvalue
