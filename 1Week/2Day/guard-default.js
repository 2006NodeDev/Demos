let dataFromUser = {
    
}

//my """"database"""""
let validUsers = [
    {
        username: 'BatManRules',
        password: 'password',
        ability: 'Rich',
        primaryColor: 'Black'
    },
    {
        username: 'Fl4sh',
        password: 'password',
        ability: 'Fast',
        primaryColor: 'Red'
    },
    {
        username:'guest',
        password:'password',
        ability: null,
        primaryColor:null
    }
]



function login(userData) {
    //if userdata is null or undefined
    let username = userData && userData.username// is our guard operator
    let password = userData && userData.password//it will protect us from the cannot read property error
    
    username = username || 'guest'//if username is a falsey we set username to 'guest'
    password = password || 'password'//same as above

    for (const hero of validUsers) {//for of loop for going through collections of data
        if (hero.username == username && hero.password == password) {
            console.log('You logged in as ' + username);
            return undefined
        }
    }
    console.log('You aren\'t a real user');

}


login(dataFromUser)
