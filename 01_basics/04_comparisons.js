// Comparing different data types

console.log("2" > 1); // true
console.log("02 " > 1); // true

// ! IMPORTANT
console.log(null > 0); // FALSE
console.log(null == 0); // FALSE
console.log(null >= 0); // TRUE
// ? = in >= is not same as  = in ==
// ? == checks of objects are same
// >= and > converts null to 0

console.log(undefined > 0); // FALSE
console.log(undefined == 0); // FALSE
console.log(undefined >= 0); // FALSE



// ! STRICT CHECKING
// ? USE '==='

console.log("2" === 2); // false same values but diffrent data types
