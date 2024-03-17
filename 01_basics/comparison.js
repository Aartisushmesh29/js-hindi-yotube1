console.log("2" > 1);
console.log("02" > 1);
console.log(null > 0);
console.log(null == 0); 
console.log(null >= 0);
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined>= 0);
// Avoid these types of conversions as they can create confusion
// == and >= > < works differently  Comparison convert null to  a number , treating it as 0 .
// Thats why (3) null >=0 is true and , null > 0 is fasle

// strict check === checks value as well as datatype ,while == checks only value
console.log ("2"===2);