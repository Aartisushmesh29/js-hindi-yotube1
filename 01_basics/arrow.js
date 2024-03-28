// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// // console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);      //--> this keyword does not work inside functions
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// *******Arrow functions**********

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//  *****implicit arrow functions*****-->> no need to wirte "return kyword"

// const addTwo = (num1, num2) =>  num1 + num2    

// const addTwo = (num1, num2) => ( num1 + num2 )   --> paranthesis ke andr return likhne ki need nhi hoti .. curly braces ke andr likhte hai 

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()