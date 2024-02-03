function init() {
  var name = "Mozilla"; // name is a local variable created by init
  const test1 = "test1value";
  let test2 = "test2value";
  function displayName() {
    // displayName() is the inner function, that forms the closure
    // Only "name" is included in this scope called "closure"
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
console.log("start");
init();

console.log("end");

// NOW USING THIS CLOSURE
function makeFunc() {
  const name = "FIREFOX";
  function displayName() {
    console.log(name);
  }
  // RETURN THE INNER FUNCTION,
  // WHEN WE RETURN THiS INNER FUNCTION,
  // IT"S lexical scope is also returned which contains the value for const name which was declared in outer scope
  return displayName;
}

const myFunc = makeFunc();
// Invoking inner function and printing name , whose scope was originally between outer function,
// if it weerent for closures this would printed undefined
myFunc();

//Much practical usage of closure

function getColorChangeFunction(element) {
  const elementId = `${element.getAttribute("id")}`;

  function changeColor() {
    document.body.style.backgroundColor = elementId;
  }

  // return this change color function along with it;s lexical scope
  return changeColor;
}

document.querySelector("#buttons").childNodes.forEach(function (childNode) {
  if (childNode.nodeType === Node.ELEMENT_NODE) {
    // even though get color change functions scope ended
    // it returned a reference of change color function along with it's lexical scope
    // which has different value for elementId
    childNode.onclick = getColorChangeFunction(childNode);
  }
});
