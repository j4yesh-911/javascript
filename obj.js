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


//**************** obj 2 ************************

const iguser = {}
iguser.name = 'jayesh';
iguser.age = 19;
iguser.isloggedin =false;

console.log(iguser)

console.log(Object.keys(iguser))
console.log(Object.values(iguser))
console.log(Object.entries(iguser))
console.log(iguser.hasOwnProperty('isloggedin'))
console.log(iguser.hasOwnProperty('location'))

const regularuser ={}
 regularuser.uskanaam={
fullname:{
firstname : 'jayesh',
lastname : 'gayri'
}
}
console.log(regularuser.uskanaam.fullname)

const obj1 ={1:'a', 2:'b'};
const obj2 ={3:"c", 4:'d'};

console.log(Object.assign(obj1, obj2))
const obj3 = {...obj1,...obj2}
console.log(obj3)


const userobj=[
{
    user:"user",
    gmail:'jayesh@gmail.com'
},
{
    user:"useeer",
    gmail:'jayesh@gmail.com'
},
{
    user:"user",
    gmail:'jayesh@gmail.com'
}
]
console.log(userobj[1].user)

//******************* obj 3 ***************************

const objectkibaat ={
name : 'jayesh',
course: 'js',
source : 'YT',
lecture : 19
}

// console.log(objectkibaat.lecture)  // old or time consumig method 

// const {lecture}= objectkibaat

// console.log(lecture)

const {lecture:l}=objectkibaat
console.log(l)