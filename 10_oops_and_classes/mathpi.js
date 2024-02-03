const mynewObj = { username: "username" };

console.log(Math.PI);
// Tells about hidden properties of  an object
// accepts module and proprty name
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// Writeable is false for Math.PI
console.log(descriptor);

const chai = {
  name: "ginger tea",
  price: "250",
  isAvailable: true,
  quality: "top",
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// do modify what is allowed /not allowed on a property on an object
// onyly while adding it use :-
Object.defineProperty(chai, "quality", {
  writable: true,
  enumerable: false,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "quality"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    // notice that " quality " is not printed here
    // becuase it is  not enumerable
    console.log(`${key} : ${value}`);
  }
}
