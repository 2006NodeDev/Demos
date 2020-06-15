//recursive function 
//a function that calls itself
//that calls itself
//....


// n=1 n=2 n=3 n=4 n=5 n=6 n= 7
// 0   1   1   2   3   5   8

//We'll come back after we learn about objects

let fib = (n) => {

    if (n === 1) {
        return 0
    }
    if (n === 2) {
        return 1
    }

    return fib(n - 1) + fib(n - 2)
}

console.log(fib(100));//Stack Overflow


//fib 100
//fib(99) fib(98)
//fib(98) Fib(97) fib(97) fib(96)
//fib(97) fib(96) fib(96) fib(95) fib(96) fib(95) fib(95) fib(94)