// Change bg color to black on elements with class 'body-bg-color'
document.querySelector(".body-bg-color").style.backgroundColor = "#212121";

// change text color of elements with class 'body-bg-color' to white
document.querySelector(".body-bg-color").style.color = "#fff";

// create a dom element . inout param is tag name
const divElement = document.createElement("div");
console.log(divElement);

// set a classname to div element
divElement.className = "main";
// add a id to that div element
divElement.id = Math.round(Math.random() * 10) + 1;

// Adding attributes
// More optimized , directly sets value instead of first fetching values
divElement.setAttribute("title", "some title");

// update its background color
// less optimized , fetches current vlaue of attroibute being changed then overwirtes it
divElement.style.backgroundColor = "#ff2a04";

// update its text color
divElement.style.color = "#dff8ff";

// add padding
divElement.style.padding = "12px";

divElement.style.borderRadius = "10px";
// add text to it
// ! NOT PREFFERED WAY, less optimized
// divElement.innerText = "Hey i was added dynamically by modifying dom";

// ? PREFERRED WAY, OPTIMIZED
const addText = document.createTextNode(
  "Hola! I was added dynamically by modifying dom"
);
divElement.appendChild(addText);

// add this element to body of document
document.body.appendChild(divElement);
