# Projects related to DOM

## project link

## Project 1

[Click Here] (https://github.com/riteshkhatri08/ws_javascript/tree/main/06_projects/1-colorChanger)

## Solution 1

```javascript
// Seletc buttons
const buttons = document.querySelectorAll(".button");

// select body
const body = document.querySelector("body");

// ATTACH EVENTS TO BUTTONS
buttons.forEach(function (button) {
  console.log(button);

  // Add event listenr, and type of event to listen to
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);

    // e.target points to or element to/though/at which event happened
    // set body color to what ever is the id of the button clicked
    body.style.backgroundColor = e.target.id;
  });

  /* add click event listenr and function defiention to be called back
  when event is obsserved */
});
```
