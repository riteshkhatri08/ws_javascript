class User {
  constructor(username) {
    this.od;
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME: ${this.username}`);
  }
  static createId() {
    return 123;
  }
}

let ritesh = new User("reetes");

ritesh.logMe();

// Not accesible by an instance
//  ritesh.createId();
// Only brlow works 
console.log(User.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", " iphone@apple.com");
iphone.logMe();

// Not working for child also
// ! console.log(iphone.createId());
