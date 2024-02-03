// ES6 Classess syntactic sugar

// class is a keyword

class User {
  // ? constructor of class
  constructor(username, email, password) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  // Internal this is function this is same as
  // USER.prototype.ecryptpassword = function(){}
  encryptPassword() {
    return `abc${this.password}xyz`;
  }

  changeUsername() {
    console.log(typeof this.username);
    return this.username + "XYZ";
  }
}

const chai = new User("chai", "chai@google.com", "toast");

console.log(chai);
chai.password = chai.encryptPassword();
console.log(chai);
chai.username = chai.changeUsername();
console.log(chai);

// OLD WAY TO DO THE SAME , above code is convereted to belwo code only onternally

const User2 = function (username, email, password) {
  this.username = username;
  this.password = password;
  this.email = email;
};

User2.prototype.encryptPassword = function () {
  return `$abc${this.password}xyz`;
};

User2.prototype.changeUsername = function () {
  return `$abc${this.username}`;
};

let x = new User2("t", "t@google.com", "storngpass");
console.log(x);
x.password = x.encryptPassword();
console.log(x);
