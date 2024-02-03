let myName = "RITESH   ";
const User = {
  id: "00",
  name: "RItesh",
};
console.log(myName.length);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  print: function () {
    console.log(this);
  },
  getSpiderPower: function () {
    console.log(`SpidyPower is ${this.spiderman}`);
  },
};

heroPower.getSpiderPower();

// Injecting properties in protoype
// function ritesh will be inserted in every object
// becauase arrays string functions everything is an object
Object.prototype.ritesh = function () {
  console.log("Ritesh is present in all objects");
};

// Injecting another function to every object of type String in current context
String.prototype.getTrueLength = function () {
  return this.trim().length;
};
console.log(myName.getTrueLength());

// **********  INHERITANCE ***********o
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  // setting this objects proto torefer teaching supports propertues
  __proto__: TeachingSupport,
};

// Every object is a differne t instanc ethey donto share their prototypes
// ,, except the factory shipped ones which are present in prototype

// __proto__ is property used to access prototype property

// Giving teacher object all properties pf USer OBject
Teacher.__proto__ = User;

// ABOVE WAY IS OLD WAY OF DOING OOPS in JAVASCRIPT,

// Now for proto linking there's syntactic sugar in js
// and is done as below
// MODERN SYNTAX
Object.setPrototypeOf(TeachingSupport, Teacher);
// Linking TeachingSupport proto property to parent - Teacher
