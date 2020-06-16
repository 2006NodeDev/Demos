
//prtotypal inheritance is just like class inheritance but with objects instead of classes
let parent = {
    name: 'Alec',
    age: '450'
}

let child = {
    name:'Dark souls',
    difficulty: 'Too High'
}

//the bad way
child.__prototype__ = parent
//the good way
Object.setPrototypeOf(child, parent)
console.log(child.age);

Object.prototype//should work too

(Object.getPrototypeOf(parent)).numberOfLegs = 10

console.log(parent.numberOfLegs);


let obj3 = {}

console.log(obj3.numberOfLegs);
