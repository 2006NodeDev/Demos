//we have three different ways to make strings in js
//we can use ""
// or ''
// or we can make a template literal using the ``

let string1 = "I'm a string"
let string2 = 'use single when, "you need a double inside"  I\'m'
let string3 = `I am a template literal
I have multi line functionality, I was added in es6
I also have the ability to embedd any valid javascript expression using $ and {}
like this "${string1}
${(10 * 10)/90 }"`
console.log(string1);
console.log(string2);
console.log(string3);

let stringx = "hello"
let stringy = "world"
console.log("This is concatanation " + stringx + " " + stringy);
console.log(`Achieve the same with a literal ${stringx} ${stringy}`);


