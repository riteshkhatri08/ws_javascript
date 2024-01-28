// setTimeout()
// needs handler, just a function
// timeout - a number represeting timeout in ms
// any other arguments

// const { log } = require("async");

const sayRitesh = function () {
  console.log("RITESH");
  console.log("finished waiting for 2 seconds");
};

// invoke settimeout
setTimeout(sayRitesh, 2000);

const changeHeading = function () {
  document.querySelector("h1").innerHTML = "Async events in Javascript";
};

console.log("Invoking set timeout to change heading");
const changeHeadingReference = setTimeout(changeHeading, 5000);

// clear timeout to stop code before a settimeout's handler si invoked
// requires a refrence of timeout function that was invoked

document.querySelector("#stop").addEventListener("click", function () {
  clearTimeout(changeHeadingReference);
  console.log("Stopped execution of settimeout handler which changes heading");
});

// set interval , calls a handler event repeatedly after an interval
// like watch command

const sayDate = function (str) {
  console.log(str, Date.now());
};

const sayHiInterval = setInterval(sayDate, 1000, "hey");
// clearInterval(sayHiInterval);

// remove interval after a timeout of 2000
setTimeout(clearInterval,2000,sayHiInterval)
