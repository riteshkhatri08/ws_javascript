class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  // add getter for password use get keyword then property name
  get password() {
    return this._password;
  }
  // a setter is always necessary for getter
  set password(value) {
    this._password = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }
}

const ritesh = new User("ritesh@gmail.com", "123");
console.log(ritesh.email);
console.log(ritesh.password);
