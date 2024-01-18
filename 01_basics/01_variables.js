// variables decalred with const cannot be changed
const accountId = 144553;

// for scoped variables
let accountEmail = "dummyemail@email.com";

var accountPassword = "12345";

// Not idealy way to declare variables
accountCity = "Jaipur";

// Undefined for variables that are not initialized
let accountState;

// accountId = 2  // Not allowed

accountEmail = "myemail@email.com";
accountPassword = "22222";
accountCity = "Indore";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
/*

Prefer not to use var because of issue in block scope and functional scope

*/
// SCOPE
{
}
