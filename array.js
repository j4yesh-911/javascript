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





//******************* ARRAY 2 **********************

// push , concate , spread(... ...) , flat 
// Array. is arr()   , Array.from() , Array.of()



let my_arr = ['jayesh', 'hari', 'yakshit','ashwin']
let arr_2 = ['achal', 'divyansh', 'pankaj']
let arr_3 =['purva', 'ivanshi','yashaswi']
my_arr.push(arr_2)
console.log(my_arr)// adds 2nd arr to firts like ele of 1 arr and last ele of 1st arr = whole 2nd arr
console.log(my_arr[4])
console.log(my_arr[4][1])

let newArr  = my_arr.concat(arr_2,arr_3)
console.log(newArr);
//or
let neewArr  = [].concat(my_arr,arr_2,arr_3)
console.table(neewArr);


console.log(...my_arr,...arr_2,...arr_3)// spread type to spread add array ele 



let numArr= [1,2,3,[4,5],[6,[7,8]]]
let anotherNumarr = numArr.flat(1)// removes the complexity in the arr like it sorts the ele in arr or sorts the subarr in arr ,
//  and hack for unknown complexity or subarr is using flat(infinity)
console.log(anotherNumarr)

console.log(Array.isArray('jayesh'))
console.log(Array.from('jayesh'))
console.log(Array.of('jayesh'))

let score_1 = 2005;
let score_2 = 9115;
let score_3 = 2265;
console.log(Array.of(score_1,score_2,score_3))
console.table(Array.of(score_1,score_2,score_3))
// comments
