console.log("Hey");
document.querySelector("body").style.backgroundColor = "#212121";
document.querySelector("body").style.color = "#fff";

// Create an object for xml http requests

const xhr = new XMLHttpRequest();

console.log(xhr.readyState);

// To continously monitor ready state
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  // When it reaches 4 we have received response
  if (xhr.readyState === 4) {
    // response is mostly string, convert it to json
    const data = JSON.parse(this.responseText);
    const name = data.results[0].name;
    console.log(`Name - ${name.title} ${name.first} ${name.last}`);
  }
};

// Sets the request method, request URL, and synchronous flag.
xhr.open("GET", "https://randomuser.me/api/");

// send request
xhr.send();

// ================================

// fyi
// console.log is provided by environment
// it is not a part of of core javascript
// same goes for document

console.log(console);

// ! java script is wrapper on cpp code

// example  - v8 is a runtime for js , providing various js functionality
