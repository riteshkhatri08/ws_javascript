// empty singleton  object using consturctor
// const instauser =  new  Object();

const instauser = {};

instauser.id = "123abc";
instauser.name = "Ritesh";
instauser.isLoggedIn = false;
console.log(instauser);
// nested objects
const regularuser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "ritesh",
      lastname: "khatro",
    },
  },
};
console.log(regularuser.fullname.userfullname.firstname);

console.log(regularuser);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj6 = { 5: "c", 6: "d" };

const obj3 = { obj1, obj2 };
console.log(obj3);

const obj4 = Object.assign(obj1, obj2, obj6);
console.log(obj4);

// preferred way
// [param 1 is target and remaining are source]
const obj5 = Object.assign({}, obj1, obj2);
console.log(obj5);

/// Use sspread operator

const obj7 = { ...obj1, ...obj2 };
console.log(obj7);

// Array of objects
const users = [{}, {}, {}];
console.log(users);

// Return an array of keys in an object
console.log(Object.keys(regularuser));

// Return an array of value in an object
console.log(Object.values(regularuser));

// entries , key value pairs
console.log(Object.entries(regularuser));

// check if an object has  a key
console.log(instauser.hasOwnProperty("id"));

// ==================================

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Ritesh",
};

//  ? syntactical sugar , same as course.cousreInstructor
// THIS IS KNOWN AS DESCTRUCTURING
// to avoid using "." notation repeatedly
const { courseInstructor: instructor } = course;
console.log(instructor);

//ARRAYS can also be destructured

// JSON
/*
{
    name : "ritesh",
    coursename: "js in hind",
    price: "free"
}

*/
