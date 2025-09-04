

//********************************  IIFE  ********************************************

(function namee(){
    console.log('hello kitty')
})();

// above here there is a semicolan that is important to end ane iife like ,
// if we dont put semicolan over there then the second  condition in second iife woun't work  

((name)=>{
    console.log(`hello ${name}`)
})
('cuutuuuu')
