// Change bg color to black on elements with class 'body-bg-color'
document.querySelector(".body-bg-color").style.backgroundColor = "#212121";

// change text color of elements with class 'body-bg-color' to white
document.querySelector(".body-bg-color").style.color = "#fff";

// select a element with class 'parent'
const parent = document.querySelector(".parent");
console.log(parent);

// intersting property - children
console.log(parent.children);
// returns an html collection of all html element inside this parent element;

// console.log(parent.children[1].innerHTML);
// Prints tuesday

for (i = 0; i < parent.children.length; i++) {
  // log inner html of child under parent elemnt
  console.log(parent.children[i].innerHTML);
}
parent.children[1].style.color = "orange";

// another property to get first element child
console.log(parent.firstElementChild);

// another property to get last element child
console.log(parent.lastElementChild);

// get first element with class day
const day1 = document.querySelector(".day");
console.log(day1);

//property to get parent element of current element
console.log(day1.parentElement);

// property to get next appearing sibiling of currenr element
console.log(day1.nextElementSibling);

// get all element and text nodes and any other nodes, comment elements etc
console.log("NODES: ", parent.childNodes);
