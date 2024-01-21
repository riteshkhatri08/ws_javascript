const name = "ritesh";
const repoCount = 15;
// BACK TICK FOR STRING INTERPOLATION
console.log(
  `hello my name is ${name} and i have ${repoCount} repos in my github`
);

//Another way to declare string

// STRING OBJECT instead of string primitmve
const gameName = new String("ritesh-khatri");

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()); // DOESN":T MODFIY ORIGINAL STRING
console.log(gameName.charAt(1));
console.log(gameName.indexOf("t"));

// substring
const substring = gameName.substring(0, 4); // 0 inclusive 4 exlcuiseve
console.log(substring);

// SLICE , acccepts negative values , neg values start from back
const sliced = gameName.slice(-8, 4);
console.log(sliced);

// TRIM
const newString1 = "     RITESH      ";
console.log(newString1);
console.log(newString1.trim());

// REPLACE

const url = "https://ritesh.com/ritesh%20khatri";
console.log(url.replace("%20", "-"));

// CHECK IF PRESENT
console.log(url.includes("ritesh"));

// CONVERT STRING TO ARRAY BASED ON A STRING
const myCities = "indore-pune-mumbai-surat-ahemdabad"
console.log(myCities.split("-"));