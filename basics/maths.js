//********************NUMBERS*******
const score =400 
console.log(score.toFixed(1)) 
 const number = new Number(40.5200);
 console.log(number) 
 console.log(number.toFixed(20))
 console.log(number.toPrecision(2))


const hundreds = 5200000
console.log(hundreds.toLocaleString())// default
console.log(hundreds.toLocaleString('en-US'))// select region


// ***************MATHS************

console.log(Math)
console.log(Math.abs(-4))// abs is kinda mode |-4|

console.log(Math.round(5.4)) // for roundoff
console.log(Math.ceil(4.2))// take just above value of number before decimal 
console.log(Math.floor(4.9))// takes just below value of number before the decimal
console.log(Math.min(21,5,0,5))
console.log(Math.pow(2,2))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
const min= 20;
const max =50;
console.log(Math.floor(Math.random()*(max -min)+(1)+(min)))