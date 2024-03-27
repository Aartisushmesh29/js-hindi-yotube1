// objects literals
// 

// const mysym = Symbol("key1")
// const JsUser = {
//     name:"hitesh",
//     "full name" : "chaudhary",
//     mysym : "mykey1",  // --> here it wil act like a normal element to use it like symbol we hav aeto declare it as following
//     [mysym] : "mykey1",
//     age : 21,
//     location : "jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["monday","saturday"]

// }

// accessing the objects
// console.log(JsUser.email)
// another way
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mysym])


// Changing a object's value 
// JsUser.email = "hitesh@chtgpt.com"
// Object.freeze(JsUser)   //-->.freeze locks the object
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);
 
// JsUser.greeting = function() {
//     console.log("hello js user");
// }
// JsUser.greetingTwo = function() {
//     console.log(`hello Js user , ${this.name}`);
// }
// // console.log(JsUser.greeting);
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// const tinderUser  = new Object()  //-->singleton object

// const tinderUser = {}  // --> non singleton object

// tinderUser.id  =" 123abdc"
// tinderUser.name  ="samay"
// tinderUser.isLoggedIn = false
// console.log(tinderUser);

// nested objects
// const regularUser = {
//     email:  " some@gmail.com",
//     fullname  : {
//         userFullname :{
//             firstname: " hitesh",   
//             lastname: " chaudhary",   
//         }
//     }
// }

// console.log(regularUser.fullname)

// const obj1 = {1: "a" , 2: "b"}
// const obj2 = {2: "a" , 4: "b"}
// const obj4 = {3: "a" , 6: "b"}

// // consst obj3 = {obj1, obj2}
// // const obj3 = Object.assign({},obj1 , obj2, obj3)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);

// const users = [

//     {
//         id : 1, 
//         email : "h@gmail.com"
//     },
//     {
//         id : 2, 
//         email: "h2@gmail.com"
//     },
//     {
//         id :3, 
//         email: "h3@gmail.com"
//     },
// ]
// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// ************OBJECTS DESTRUCTURING************

const course =  {
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "hitesh",
}
// course.courseInstructor 
const {courseInstructor } = course
const {courseInstructor : instructor} = course
console.log(courseInstructor)
console.log(instructor)


// **********JSON API********
// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free",
// }

// API can we be in the form of array objects

// [
//     {},
//     {},
//     {},
// ]
