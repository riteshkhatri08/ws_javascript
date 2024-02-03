// Beow way is rarely used to create object

const User = {
  //   _email: "ritesh@google.com",
  //   _password: "abc@123",
  get email() {
    return this._email;
  },
  set email(value) {
    this._email = value;
  },

  get password() {
    return this._password;
  },
  set password(value) {
    this._password = value;
  },
};

// Creat object using facotry function
// acceptsa reference object
const tea = Object.create(User);
// UNDEFINED
console.log(tea.email);
console.log(tea.password);

tea.email = "ritesh@123.com";
tea.password = "123strongpassword";

console.log(tea.email);
console.log(tea.password);

// tea.email = "ritesh"
