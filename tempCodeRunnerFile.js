function loggedin(name){
    if (!name){
        console.log('plese enter name ')
        return 
    }
    console.log(`${name} just logged innn`)
    return name ;
}
// loggedin('jayesh')
console.log(loggedin('jayesh'))