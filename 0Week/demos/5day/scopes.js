//var has global and function
//let and const have global function and block

//global scope
var x = 0
let globalLet = 5

function test() {
    //var globalVar;//this is hoisting
    //var newVar;

    //Don't do this, use a keyword to decalre vars
    // thisIsBad = 20
    // console.log(thisIsBad);
    
    console.log(newVar);
    

    console.log('x= ' + x + ' globalLet= ' + globalLet)
    // globalVar = 10
    // globalLet = 20
    // console.log('globalVar= ' + globalVar + ' globalLet= ' + globalLet)

    if(true) {
        var x = 100
        let blockLet = 50
    }
    console.log('x= ' +x);
    console.log('blockLet= ' + blockLet)

    var newVar = 'hello'
}
test()