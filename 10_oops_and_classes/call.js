function setUsername(username) {
  // COMPLEX DB CALLS

  this.username = username;
  console.log("setUsername is Invoked");
  console.log(`this inside setUsername :`);
  console.log(this);
}

function createUser(username, email, password) {
  //! if we directly invoke setUsername  from  createUser then the context inside createUser is not passed to setUsername and setUsername , sets property username in its own new context
  //! so once it's finished executing it's context is lost and along with it our property 'username'
  /** 
  setUsername(username);
    */
  //  ?So to avoid this behvaiour javascript provides a "call" function which is present in every object's prototype
  // ?invoking a method through call allows the caller's context to be used inside the function  whcih is invoked
  // ? Correct way to do it
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
  console.log("createUser Invoked");
  console.log(`this inside createUser :`);
  console.log(this);
}

const chai = new createUser("chai", "chai@gmail.com", "123456");

console.log(chai);
