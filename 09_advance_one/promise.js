console.log("Hey");
document.querySelector("body").style.backgroundColor = "#212121";
document.querySelector("body").style.color = "#fff";
// ===============================================================//

// Add a div element to body where content will be placed
const contentHolderHeading = document.createElement("div");
const contentHolder = document.createElement("pre");

// Set it's text
contentHolderHeading.style.fontSize = "30px";
contentHolderHeading.appendChild(
  document.createTextNode("Fetching your content")
);
// set content as loaoding bar
contentHolder.style.fontSize = "24px";
contentHolder.appendChild(document.createTextNode("."));

document.querySelector("body").appendChild(contentHolderHeading);
document.querySelector("body").appendChild(contentHolder);

// Now use set interval to continously change content of contentHolder
let count = 0;
const loadingContentInterval = setInterval(() => {
  if (count > 10) {
    count = 0;
    contentHolder.firstChild.data = ".";
  } else {
    contentHolder.firstChild.data += " .";
    count = count + 1;
  }
}, 100);

// NOW USE FETCH API TO GET A PROMISE TO LOAD DATA

// const myPromise = new Promise((resolve, reject) => {
//   const waitTime = Math.round(Math.random() * 10000) + 2;
//   //   if (waitTime % 7 === 0) {
//   //     setTimeout(() => {
//   //       reject();
//   //     }, 2000);
//   //   } else
//   {
//     setTimeout(() => {
//       resolve();
//     }, waitTime);
//   }
// });

// contentLoadedSuccessFully = function () {
//   clearInterval(loadingContentInterval);
//   contentHolder.firstChild.data = "Ritesh";
// };

// contentLoadingFailure = function () {
//   clearInterval(loadingContentInterval);
//   contentHolder.firstChild.data = "FAILED TO LOAD CONTENT x_x";
//   contentHolderHeading.firstChild.data = "ERROR";
// };
// myPromise.then(contentLoadedSuccessFully, contentLoadingFailure);

const successLoadingContent = function (resp) {
  console.log("Successfully Loaded Content");
  setTimeout(function () {
    clearInterval(loadingContentInterval);
    console.log(resp.results[0]);
    contentHolder.style.fontFamily = "consolas";
    contentHolder.style.fontSize = "15px";
    contentHolderHeading.firstChild.data = "FINISHED LOADING : ";
    contentHolder.firstChild.data = JSON.stringify(
      resp.results[0],
      undefined,
      2
    );
  }, Math.round(Math.random() * 10000) + 5);
};

const respPromise = fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .catch((error) => error);

respPromise.then((response) => successLoadingContent(response));
