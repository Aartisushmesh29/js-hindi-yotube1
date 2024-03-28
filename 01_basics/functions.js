// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    // return number1 + number2
// }

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// function loginuserMessage(username){
//     if(usesrname === undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just  logged in`

// }
// // console.log(loginUserMessage("hitesh"))
// // console.log(loginUserMessage(""))
// console.log(loginUserMessage())

function calculatecartPrice(...num1){   //-> (...) is rest operator 
    return num1

}
console.log(calculateCartPrice(200,400,500,600))

const user = {
   username : "hitesh",
   price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`)
}


// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));