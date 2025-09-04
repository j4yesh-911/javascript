let name = "jayesh";
let age = 19;
console.log(`hello my name is ${name } and my age is ${age}`);
const myname = new String('jayesh_G')

console.log(myname);
console.log(myname[0]);
console.log(myname.__proto__);
console.log(myname.toUpperCase());
console.log(myname.charAt('1'));
console.log(myname.indexOf("G"));
let vaar = myname.substring(0,6);
console.log(vaar);
let newVaar = myname.slice(-7,2);
console.log(newVaar);
console.log(newVaar.toUpperCase())


let naya = '    jaggahe   '
console.log(naya.trim())  // trim is used to trim the extra space ;

// .replace 

console.log(naya.replace('g','G'));  // this line only replace only single g 
console.log(naya.replace(/g/g,'G')); // here first g means replacing g with G and second g in/g/g is for all elements or saying all the g's.

// include 

console.log(naya.includes('ja'))
console.log(naya.split('a'))