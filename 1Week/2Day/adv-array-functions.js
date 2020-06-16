let data = [
    {
        name:'The Flash',
        ability: 'Fast as heck',
        primaryColor:'Red',
        numberVillainsDefeated: 150,
        secretIdentity: 'Barry'
    },
    {
        name:'Wonder Woman',
        ability: 'Super Strong, Agile, Whip of truth',
        primaryColor:'Blue',
        numberVillainsDefeated:200,
        secretIdentity: 'Diana Prince'
    },
    {
        name: 'Thor',
        ability:'Literal God of Thunder',
        primaryColor:'Silver',
        numberVillainsDefeated:45,
        secretIdentity:'Thor'
    },
    {
        name:'Iron Man',
        ability:'Somehow a super a genius? Snarkiness',
        primaryColor:'Red',
        numberVillainsDefeated:100,
        secretIdentity:'Tony Stark'
    },
    {
        name:'Batman',
        ability:'Super Planner, Rich',
        primaryColor:'Black',
        numberVillainsDefeated:Infinity,
        secretIdentity:'Bruce Wayne'
    },
    {
        name:'Quicksilver',
        ability:'Fast as heck',
        primaryColor:'Silver',
        numberVillainsDefeated: 101,
        secretIdentity:'Pietro Maximoff'
    }
]

//we are in charge of doing data analysis on super heros
// generally 3 phases 
//filter out extraneous data
//map data to an appropriate format
//reduce data to value we want to extract


//filter is a higher order function
let filteredData = data.filter((element, index, originalArray)=>{//we provided a synchronous callback function
    //if you return true for an element - that element is kept in the new array
    if(element.numberVillainsDefeated >= 100){
        return true//we keep any element that has num Villains defteated => 100
    }else {
        return false // everyone else gets chuck out
    }
})//returns a new array

console.log(data);
console.log(filteredData);


//map is for changing the data in the array into a new format
let mappedData = filteredData.map((element, index, originalArray)=>{
    //whatever return becomes the new element in the new array

    let ability = element.ability
    return {
        ability:ability
    }

    //const {ability} = element //destructuring, extracting the field called ability from the object element
    //return {ability}//es6 enhanced object literals, if I want to make a new object that has a field that is the same name as a variable, I can just write the name
})

console.log(mappedData);

let reducedValue = mappedData.reduce((previousValue, currentElement, index, originalArray)=>{
    if(previousValue[currentElement.ability]){
        previousValue[currentElement.ability]++
    } else {
        previousValue[currentElement.ability] = 1
    }
    return previousValue

}, {})//takes a collection of data and turns it into a single value

console.log(reducedValue);

console.log(data.reduce((previousValue, currentElement)=>{
    return previousValue + currentElement.numberVillainsDefeated
}, 0));

data.forEach((element, index, originalArray)=>{

})//for loop but with your callback on each element

