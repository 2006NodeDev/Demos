let obj1 = {
 name:'Alec',
 superHero:false,
 pet:{
     name:'Jerry'
 }
}

//spread is a shallow copy, so pet is the same as above
let obj2 = {
    ...obj1,
}

// let obj2 = {// if you do another spread you can copy sub reference types
//     ...obj1,
//     pet:{
//         ...obj1.pet
//     }
// }

obj2.pet.species = 'Dog'
console.log(obj1,obj2);