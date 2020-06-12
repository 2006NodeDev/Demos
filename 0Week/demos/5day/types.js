
function typeCheck(a){
    console.log(`param has a value of ${a} and a type of ${typeof(a)}`);
}

let FALSE;
typeCheck(Math.PI)
typeCheck(FALSE)
typeCheck(1984)
typeCheck(0)
typeCheck(NaN)
typeCheck(undefined)
typeCheck(null)
typeCheck('dog' == 'Dog')
typeCheck([])
typeCheck({})
typeCheck(typeCheck)
typeCheck(Infinity)
