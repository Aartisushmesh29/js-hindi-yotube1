// array -->  in js array can be resized (resizeabile ) and can store elements of different datatypes
// const myarray = [0,1,2,3]
// const myarr = [0,1,2,3 ,"aarti",true]

// const myArr =  new Array(1,3,4,5)
// console.log(myArr[1])

// // *****Array methods*******

// myArr.push(6)
// console.log(myArr)
// myArr.pop()
// myArr.unshift(9)      //->> not  so good for larger array as it takes more time to shift all values in arry and add element in leftmost positon

// myArr.shift()     //takes no arguments
// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


// ****slice and splice

// console.log("A" , myArr)

// const myn1 = myArr.slice(1,3)     //-->original array m koi modification nhi krta hai
// console.log(myn1)
// console.log("B ", myArr)
// const myn2 = myArr.splice(1,3)    //--> given range ke elements ko remove kr deta hai or rest array return krta hai
// console.log(myn2)
// console.log("C ", myArr)

// an array  can be pushed as data into another array  ,,, but this type of conacatenation is not a good practise
// const arr1 = ["abc", "bcd" , "cde"]
// const arr2 = ["bc", "bd" , "de"]


// arr1.push(arr2)
// console.log(arr1)

// instead  of using push use concat()  ---> it returns a new array while push return modified original array
//  const newA = arr1.concat(arr2)
// console.log(newA)
// mostly spread (...)method is used for conctenation 
// const newA1 = [...arr1, ...arr2]
// console.log(newA1)

const anotherArr  =  [1,2,3,[4,5,6],7, [6,7,[4,5]]]
const real_anotherArr = anotherArr.flat(Infinity)
console.log(real_anotherArr)



console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name : "hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))