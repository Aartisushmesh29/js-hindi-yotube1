// Dates
// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate )

// let mycreatedDate=new Date(2023,0,23)
// let mycreatedDate=new Date(2023,0,23,5,3)
let mycreatedDate=new Date("2023-01-14")

// console.log(mycreatedDate.toDateString())
// console.log(mycreatedDate.toLocaleString())

let mytimeStamp = Date.now()
console.log(mytimeStamp);
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)


// `${newDate.getday()} and the time`

newDate.toLocaleString('default' , {
    weekdat: "long",
    
})
