// Change body bg color to black and text color to white
document.querySelector(".body-bg-color").style.backgroundColor = "#212121";
document.querySelector(".body-bg-color").style.color = "#fff";

// function to dynamically add elements to ul

function addLanguage(langName) {
  // get list
  const languageList = document.querySelector(".language");

  // create list item
  const listItem = document.createElement("li");

  // add language name
  listItem.innerHTML = `${langName}`;

  // add list item to list
  languageList.appendChild(listItem);
}

// Invoke function to add item to list

addLanguage("Java");
addLanguage("Python");
addLanguage("CPP");

//  ! FYI , above approach is unoptimized

// ? BELOW is optimzed way to do the same
function addLanguageFAST(langName) {
  // create list item
  const listItem = document.createElement("li");

  // * create text node is better than overwriting "innerHTML" property
  listItem.appendChild(document.createTextNode(`${langName}`));

  document.querySelector(".language").appendChild(listItem);
}

// Invoke method to add item in optimized way
addLanguageFAST("golang");

/* ---------------------------*/
//  dynamically edit elements

// get fourth element of the list, not zero indexed
const secondLang = document.querySelector("li:nth-child(4");
// ! Don;'tuse this , it's unoptimzed
// secondLang.innerHTML = "Mojo";

// optimized way below
// create element
const listItem = document.createElement("li");
listItem.textContent = "Mojo";

// replace with new element
secondLang.replaceWith(listItem);

// -------------------------------
// Another edit example

const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li> TypeScript</li>"; // unoptimized

/* ---------------------------*/
//  dynamically delete elements

const lastLanguage = document.querySelector("li:last-child");
lastLanguage.remove();
