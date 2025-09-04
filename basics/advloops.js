const jss=['jayesh', 'hari', 'pankaj']
for (const element of jss) {
    console.log(element);
    
}

for (const key in jss) {
    console.log(jss[key])
}

const valu = 'hello_jayesh'
for (const ele of valu) {
    console.log(ele);

}

  console.log('\n');

const map = new Map()
map.set('js','javascript')
map.set('css','cascading style sheet')
map.set('cpp','c++')
map.set('py','python')
map.set('rb','ruby')

for (const [keyyy, vall] of map) {
    console.log(`${keyyy} is shortcut for ${vall}`);
    
}
 

// for object 


const kalu ={
    r : 'ram',
    s: 'shyam',
    m: 'mohan',
    l: 'laluram',
    k: 'kaluram'
}
       

for (const key in kalu) {
   console.log(`${key} stands for ${kalu[key]}`)
} 



const arrr=['jayesh', 'hari' , 'pankaj']
// arrr.forEach(function(val){
//     console.log(val)
// })
function dolo(item){
    console.log(item);
    
}
arrr.forEach((dolo))




const jah=[
    {
        jayeshsub :'java',
        jayeshscript: 'js'
    }
,
    {
        jayeshsub :'ruby',
        jayeshscript: 'python'
    },
    {
        jayeshsub :'react',
        jayeshscript: 'typescript'
    }
]

jah.forEach((item)=>{
    console.log(`jayesh script is ${item.jayeshscript}, and jayesh sub is  ${item.jayeshsub}`);
    
})

//comment 
// comment 



const mynum =[ 1,2,3]


const mytotal=mynum.reduce((acc,val)=>acc+val,0)

// const mytotal =mynum.reduce(function(acc,curval){
    //     return acc+ curval
    // },1)
    
    console.log(mytotal) 

    const objj=[
        
        {
            itemname :'python',
            price :1999
        },

        {
            itemname :'DSA (C++) ',
            price :2999
        },


        {
            itemname :'JAVA',
            price :3999
        },


        {
            itemname :'WEB-DEV',
            price :5999
        },
        

        {
            toffie :'CANDY-MAN',
            price:4
        }

    ]
    console.log(
     objj.reduce((acc,val)=>acc+val.price,0));