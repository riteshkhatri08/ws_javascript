// get element

// to attach click event listner to image
document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    // alert("owl clicked");
    // console.log("owl clicked");
    console.log(e);
  },
  true
);
// 3rd param is for event propogation
// there are 2 context for -event propogation event bubbling and  event capturing
// type, timestamp, defaultPreveneted(stop deefault pehaviour of tag)
// target, srcElement, currentTarget, toTarget
// altkey, ctrlkey, shiftkey, keyCode

// attachEvent() method - used in internet explorer in old times
// jQuery - on (to attach event listener)

document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    // console.log("owl clicked");
    // stop event propogation
    // e.stopPropagation();
  },
  true
);
// false = event bubbling
// true = even capturing

document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("list item clicked");
    // stop event propogation
    //   e.stopPropagation();
  },
  false
);

// disable default behaviour of a tag
document.querySelector("#google").addEventListener(
  "click",
  function (e) {
    // use thisto disbale
    e.preventDefault();
    console.log("google clicked");
  },
  false
);

// add event listener to hide an image if clicked upon

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    console.log(e);
    // get clicked element's parent node then remove it
    console.log(e.target.id, e.target.tagName);
    if (e.target.tagName === "IMG") {
      const parentNode = e.target;
      parentNode.remove();
    }
  },
  false
);
