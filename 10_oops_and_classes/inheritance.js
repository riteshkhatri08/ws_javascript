class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

// using extends instead of setPrototypeOf method

class Teacher extends User {
  constructor(username, email, password) {
    //  using supeer instead call to passcontext
    // another syntactic sugar
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const ritesh = new Teacher("reetes", "ritesh@gmail.com", "password");

ritesh.addCourse();
ritesh.logMe();

console.log(ritesh instanceof Teacher);
console.log(ritesh instanceof User);
console.log(ritesh instanceof Function);
console.log(ritesh instanceof Object);
