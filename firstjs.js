//hello
// const student ={
// fullName : "jayesh gayri",
// year: "3rd",
// branch: "CSE",
// rollNumber : 57,
// }
// // console.log(student);
// student ["rollNumber"]= student["rollNumber"]+1;
// student ["year"]= "III year";
// console.log(student["rollNumber"]);
// console.log(student);



//                  TBALE CREALTE ON CONSOLE 
// const accountId = 525;
// let accountName ='jayesh';
// var acckhyu = 'bank';
// accountState = "punjab";
// let kyure;

// console.log(accountId);
// console.table([acckhyu,accountName,accountState, kyure]);





//                   below this is for using new type of js 




// "use script" // this !!

//  //                    understanding the concept of null and undefined 
// let age = "20"+3;
// let state ;
// let marks = null;


// console.log(typeof age);
// console.log(typeof state);
// console.log(typeof marks);



//                   CONVERSION




// let mereNumber = "33+5abc"
// console.log(typeof mereNumber);

// let NNumber = Number(mereNumber)
// console.log(typeof NNumber);
// console.log(NNumber)

// let number =""
// let vari = Boolean(number);
// console.log(vari)


// console.log("1"+2+3+4+5)
// console.log(1+2+"2"+2+3)
// console.log(1+2+("b")+(2+3))
// console.log(+true)
// console.log(+"")

// console.log("5"<2)

// "==" doesnt check the data type ;
// "===" check the datatype always of both values !!





//                                array in js

const names=[ "jayesh" , "hari" , "pankaj" ,"ashwin" ,"yakshit"];
console.log(names)
console.log(typeof names );



//                           OBJECT 

    // HERE  we use it like key value pair on "{}"
let myobject = { name : "jayesh",
      class : 6,
      age : 12,
}
const { name , age}=myobject

console.log(name); 
console.log(age);  



//                              FUNCTIONS
 let myfunction = function(){
    console.log("hello  jayesh");
 }
 myfunction()
 console.log(myfunction);

 console.log(typeof myfunction)