// arrays in javascript are objects (non primitive)
// square braces to declare an empty array
// java script arrays are resizable and a mix of data structure
// squares braces to access an item at an index
// copying array object creates a shallow copies
const myArray = [];
const myArr = [1, 2, 3, 4, 5];
console.log(typeof myArr);

const antiheroes = ["venom", "deadpool", "wolverine"];
console.log(antiheroes[1]);

// Array Methods

// Add value to array
myArr.push(6);
console.log(myArr);

// removelast value from array
myArr.pop();
console.log(myArr);
// Add value at start of element , this is costly operation for large arrays
// O(n)
myArr.unshift(9);
console.log(myArr);

// remove first element
myArr.shift();

console.log(myArr);

console.log(myArr.includes(4));
console.log(myArr.indexOf(4));


// Join array elemnts with ',' and return resultant as a string
console.log(myArr.join())
console.log(typeof myArr.join())


// Slice and splice

console.log("A " ,myArr);
// ! Returns subarray from 1 2 , 3 is not inclusive
// Doesn't modify original array
const myn1 =  myArr.slice(1,3);
console.log(myn1);

console.log("B " ,myArr);

// start from 3 elements from index 1
// ! Splice modifies original array and removes the sub array 
const myn2 =  myArr.splice(1,9);
console.log(myn2);

console.log("C " ,myArr);


