// arr , array  (done)
// push , pop , indexof , include , unshift, shift,
// join 
// slice and splice 

const arr =[ 1,2,3,4,5,];
console.log (arr);
console.log (arr[2]);
const narr = new Array(2,5,9,3,7);
console.log(narr[2]);

narr.push(10);//  pushs th value at the end only 
console.log(narr);
narr.pop(); // no argunments required in pop function , and only pops from the end
console.log(narr);

console.log(arr.indexOf(5))// shows the index if element in brecate
console.log(arr.includes(4))// returns the value in boolen 


arr.unshift(10); // works reverse means unshift adds the value in front of arr
console.log (arr);

arr.shift() // reverse of unshift means removes the value fron front of arr 
console.log (arr);


console.log ("before slice",arr);
console.log(arr.slice(1,3));// doesnot effects the og array but shows the sliced version
console.log ("after slice",arr);


console.log ("\n\nbefore splice",arr);
console.log (arr.splice(1,3));// effects the originl array like it remove the spliced elements from og array including the limit 
console.log ("after the splice",arr);

