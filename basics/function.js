function myfunction(){
    console.log('hello')
}
myfunction()

function addTwoNumbers(number1 , number2){
return number1+number2;
}

console.log(addTwoNumbers(5,5))

function addTwoNumbers(number1 , number2, number3,number4){
return number1+number2+number3+number4;
}

console.log(addTwoNumbers(5,('5'),2,3))


function loggedin(name){
    if (!name){
        console.log('plese enter name ')
        return 
    }
    console.log(`${name} just logged innn`)
    return name ;
}
// loggedin('jayesh')

console.log(loggedin('jayesh'))// this console log is to print return value
//  and also gives the value for the name variable 


//*************************** functions 2 ********************************

priceToAdd ={
    price :250,
    age : 19,
    // dresscolor : 'yellow' 
}

function priceAndAge(anyobject){
    console.log(`hello price is ${anyobject.price}, and age is ${anyobject.age} and dress color is ${anyobject.dresscolor}`)
}

// priceAndAge(priceToAdd)
console.table(priceAndAge(priceToAdd))
console.table(priceToAdd)

priceAndAge({
       agee : 120,
    dresscolor : 'yellow' 
})

// priceAndAge(priceToAdd){
//     agee = 120,
//     dresscolor = yellow ;
// }

//jayesh

const variableee = function myvarfun(){
    console.log ('nothing just posting it in git')
    
}



const a = 'shubham'

print()

function print(){
    console.log(a);
}



// again same thing as above