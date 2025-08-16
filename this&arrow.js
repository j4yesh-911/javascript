


// browser k ander global object windows h 




let myobject ={
    username : 'jayesh',
    age :19,

    who: function myfun(){
        console.log(`hello ${this.username}, this side`)

           console.log(this,"\n") // here this 'this' is showing the entire info about the object
    } 
    
 

}
myobject.who()  // this function will always the 'this.username' as username is not manupulated yet 

myobject.username='lalu yadav'

myobject.who()  // this will always return new username 



console.log(this) // this will show only '{}' as node is the global object ine node env, but "browser k ander global object windows h"



function merabhai(){
    console.log(this)

    // here 'this' will show something 
}
merabhai();


function merabhai(){
    const usernamee = 'jayeshh'
    console.log(this.usernamee)
// here 'this' will show undefined as it does't work with functions , only works with object like 'this. username '
}
merabhai();


//*****************************ARROW FUNCTION***********************************************

K=()=>{
   console.log('HELLO JAYESH') 
}
K();



Twonum=(num1,num2)=>{
    return ++num1 , --num2;
    
}
console.log(Twonum(5,2))
// doubt
 

addTwonum=(num1,num2)=> (num1+num2)

console.log(addTwonum(5,2))

// here in this syntex no need to write return as no '{}' used here for num1+num2

addTwonum=(num1,num2)=> {(num1+num2)}

console.log(addTwonum(5,2)) // as this will show undefined as perenthises is inside '{}'



// something for obj decleration in arrow function is below 

