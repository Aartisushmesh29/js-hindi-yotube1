"hello" + "Aarti"
const name = "hitesh "
const repoCount = 50

// console.log(name + repoCount + " value")   ->not a preferable way to print strings

// modern way
console.log(`Hello my name is ${name} and my repo coount is ${repoCount}`);

// const gameName = new String('hitesh')    -->using this syntax we can use strings predfined methods

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

conost url = "https://hitesh.com/hitrsh%20choudhary"
console.log(url.replace('%20' , '-'))
console.log(url.includes('sundar'))
console.log(url.split('-'))


