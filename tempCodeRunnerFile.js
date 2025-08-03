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