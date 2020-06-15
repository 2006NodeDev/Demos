let mathF = (a, b, c) => {
    console.log(`a=${a} b=${b} c=${c}`);

    return (a * b) - c
}
//method overloading in js, doesn't really exists
//we need to write one function that can handle all of the different states of params
console.log(mathF());

console.log(mathF(1))

console.log(mathF(1, 2, 5));

let avg = (a, b, ...params) => {
    if (!a) {
        return 'Pass in at least one value'
    } else if (!b) {
        return a
    } else if (!params.length) {
        return (a + b) / 2
    } else {
        let total = a + b
        for (let i = 0; i < params.length; i++) {
            total += params[i] //+= total = total + params[i]
        }
        return total / (params.length + 2)
    }
}



console.log(avg(10, 5, 5, 20));

