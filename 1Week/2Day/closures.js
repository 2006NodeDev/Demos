//to make a closure we need an outer functions and an inner function or object


let superHeroFactory = (name, ability, primaryColor )=>{
    //we want to utilize encapsulation and make the fields of our superhero private
    //we can do that by making closures on the parameters that got passed in
    let getAbility = ()=>{
        return ability //create a closure on ability
    }
    let setAbility =(newAbility)=>{
        ability = newAbility //create a closure on ability
    }



    return {name,getAbility, setAbility, primaryColor}//this will be the superhero
}

let theFlash = superHeroFactory('Flash', 'Fast as heck', 'Red')

console.log(theFlash);

console.log(theFlash.getAbility());

console.log(theFlash.ability);

