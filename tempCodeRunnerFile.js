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