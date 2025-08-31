// // let n 
// for (i =0; i<10;i++){
//    let  fun = Boolean(i);
// console.log (fun);
// if(fun ==false){
//     console.log("ye kya tha bhai ?")
// }
// }


// nested function 

function first (){
    let username  = "jayesh";
    function second (){
        const name = "dihhk";
        console.log(name);
        console.log(username);
    }
    // console.log(name);   can't runn this cuz can't take icecream from smaller ones  
    
    second()

}

first()







//********************************* function decleration with scope logic **************************************************************************


// console.log(testfun(105))
function testfun(num){
    if(true){
 return num - 5;
    }  
                     // int his type of function decleration the function call can be by both type before as well as after 
}
console.log(testfun(105));





// console.log(fu(10)) here this line can't run it will give error as in this type of fun decleration we can't do fun call like this 

// console.log(fu(10)) // " this line ", talking about in above line can give error only if written aboe the function , no problem if id written below the function decrelation and defination 


const fu = function funseccc(numm){
     return numm + 5;
    
} 
console.log(fu(10))


