//recursive function 
//a function that calls itself
//that calls itself
//....


// n=1 n=2 n=3 n=4 n=5 n=6 n= 7
// 0   1   1   2   3   5   8

//We'll come back after we learn about objects
let memo = {//using an object as a dictionary not as an object like normal
    1:0,
    2:1,
}


let fib = (n) => {
    
    if(memo[n] || memo[n] === 0){
        return memo[n]
    }
    else{
        memo[n] = fib(n - 1) + fib(n - 2)
        return memo[n]
    }
}

console.log(fib(1000));//Stack Overflow


//fib 100
//fib(99) fib(98)
//fib(98) Fib(97) fib(97) fib(96)
//fib(97) fib(96) fib(96) fib(95) fib(96) fib(95) fib(95) fib(94)