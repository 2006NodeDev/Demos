//lets a make a pure function
function sum (x, y) {
    return x + y
}

//imagine this is looged in users
//number of emails we've sent
let sharedState = 10

//relies on external data its impure
function impureSum(x, y, sharedState){
    return x + y + sharedState
}

//causes a side effect
function updateSharedState(){
    sharedState++
}

console.log(sum(2,3));

console.log(impureSum(2,3, sharedState));//2 3 15
updateSharedState()
console.log(impureSum(2,3, sharedState));//2 3 16
console.log(impureSum(2,3, sharedState));