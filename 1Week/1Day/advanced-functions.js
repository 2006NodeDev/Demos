//this function takes in some numbers and another function to call with those numbers
function doMath ( x, y, z, operation){
    return operation(x,y,z)//this is a callback function
}
//this is the standard way of making functions
function sum (x, y) {
    return x + y
}
//this is the same as above, I tend to like this syntax more
let sub = (x, y) => {
    return x - y
}

console.log(doMath(10, 5, 1, sum));

console.log(doMath(10, 100, 99, (x,y,z)=>{// our anonymous function
    return (x+y+z)/3
}));

console.log(doMath(10,5,6, sub));


//get user data function (process user data function)

