let user = {
    name: 'Alec',
    favSoup: 'Gumbo',
    numberOfLegs: 2,
    job: 'Trainer',
    fineStatus: 'Everything is'
}


for (const key in user) {
    console.log(`key is =${key} and value is =${user[key]}`);
    
}
