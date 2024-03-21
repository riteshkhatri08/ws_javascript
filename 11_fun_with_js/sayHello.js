const HOST = "127.0.0.1"
const PORT = "8080"
const SAY_HELLO_URI = "hello"

const showServerResponse = function (response) {
    let responseElement = document.getElementById("responsepara");
    if (responseElement === null) {
        responseElement = document.createElement("h2");
        responseElement.setAttribute("id", "responsepara");
        document.getElementById("root").appendChild(responseElement);
    }
    response.text().then((responseText) =>
        responseElement.textContent = `server replied - ${responseText}`
    );

}

const logResponse = function (response) {
    console.log(response);
    // set response
    showServerResponse(response);
}


const logFailure = function (reason) {
    console.log(`Failed to get response because : ${reason}`)
}

const sayHello = function () {

    // Call server
    let helloPromise = fetch(`http://${HOST}:${PORT}/${SAY_HELLO_URI}`);
    helloPromise.then(logResponse, logFailure).catch(logFailure);
    // Parse data and set it in text element
}



// Add  elements to body root
const bodyroot = document.getElementById("root");
// 1) Hello Button
const helloButton = document.createElement("button");
helloButton.textContent = "Click to Say Hello to Server !";
helloButton.addEventListener("click", sayHello);
bodyroot.appendChild(helloButton);


// styling

document.querySelector("body").style.backgroundColor = "#242424";
document.querySelector("body").style.color = "#fff";