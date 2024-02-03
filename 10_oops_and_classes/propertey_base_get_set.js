// how get set were defined for properties in old syntax

function User(email, password) {
  this._email = email;
  this._password = password;

  // Define property
  // accepts context and property name as input param
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email;
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("chai@chai.com", "chaipassword");

console.log(chai.email);
console.log(chai.password);
