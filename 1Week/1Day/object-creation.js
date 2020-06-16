let octopus = {
    name:'Jerry',
    species: 'Coconut Octopus',
    numberOfLimbs: 8
}

console.log(octopus);

octopus.swim = ()=>{
    console.log('I\'m Rolling around in a coconut');
}
octopus.swim()

function Book(author, title, ISBN, pages, chapters){
    //this refers to the object in memory that is the function
    this.author = author
    this.title = title
    this.ISBN = ISBN
    this.pages = pages
    this.chapters = chapters
    //we dynamically add some fields, and use the functions params to get values for those fields
}

//the new keyword, because it makes a new copy of an object in memory
let hPASS = new Book('J.K. Rowling', 'Harry Potter and the Sorceror\'s Stone', 1, 270, 18)
console.log(hPASS);
let hPACOS = new Book('J.K. Rowling', 'Harry Potter and Chamber of Secrets', 2, 320, 22)
console.log(hPACOS);


class VideoGame {
    name
    genre
    constructor(name, genre){
        this.name = name
        this.genre = genre
    }
    play(){
        console.log(`This ${this.name} is a ton of fun`);
        
    }
}

let vivaPinata = new VideoGame('Viva Pinata', 'Gardening')
console.log(vivaPinata);
vivaPinata.play()
