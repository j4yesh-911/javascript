//*************** obj 1 ***************************


let Sym = Symbol('key');//declearing symbol;

const myobject={
    name : 'jayesh',
    age :19,
    "fullname" : 'jayesh gayri',
    roll :'23ETCCS057',
    [Sym] :"key",
    school: "TSA",
    email :`kalumadari@gmail.com`,
    isloggedin :false

}
// console.log(typeof Sym )
// console.log(typeof myobject[Sym])
// console.log(myobject[Sym])

console.log(myobject.email)
console.log(myobject["fullname"])

// here many of the ele or variable or symbole cannt be accessed by thr , var so those variable are accessed by "[]".
//like here is this case sym and fullname .


// here we can also freeze the objects using freeze 
myobject.email= 'kakumangal@gmail.com'
console.log(myobject.email)

myobject.myfunction = function (){
    console.log(`hello jayesh kese ho ?, is your age ${this.age} ??`);
}
console.log(myobject.myfunction())

Object.freeze(myobject)

myobject.email= 'dakumangal@gmail.com'
console.log(myobject.email)  // as now object id freezed no more changes can m=be occure in the object now,
// so this console.log will also show the older email which is "kakumangal@gmail.com"


