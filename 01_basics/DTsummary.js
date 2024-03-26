/* Primitve (non refernce)
7 types : String , Number , Boolean, null , undefined , Symbol , BigInt


Reference (Non primitive)

Array , Objects, Functions 
*/

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);

// const bigNumber = 1344546476876895n

// stack(primitive) , heap (Non-primitive )

let myYoutubename ="hiteshchoudhary"
/* after assigning the first variable to another it will not change the value of first variable as copy of first variable is passed here (stack memory)
*/
let anotherName  = myYoutubename;
anotherName = "aarti"
console.log(myYoutubename)
console.log(anotherName)

let userOne = {
    email: " user@google.com",
    upi : "usesr@ybl"
}
// after assigning the value to another variable value of object will get vahnge as reference is passed(heapp memeory)
let userTwo = userOne 
userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);


