// find the node that contains the joke

// get a new joke from the chuck norris joke api

//set the innertext of that node to the new joke

//every time someone clicks the button


let button = document.getElementById('joke-button')

button.addEventListener('click', ()=>{
    getJokeAPIFetch()
    
})

//how to do it with an xhr

function getJokeAPIXHR(){
    let httpReq = new XMLHttpRequest()

    // every time the state of the XHR changes, it executes this function
    httpReq.onreadystatechange = ()=>{
        if(httpReq.readyState === XMLHttpRequest.DONE){
            if(httpReq.status === 200){
                console.log(JSON.parse(httpReq.responseText));//JSON.parse will turn json into a JS object
                let jokeNode = document.getElementById("joke-header")
                jokeNode.innerText = JSON.parse(httpReq.responseText).value.joke
            }
        }
    }
    httpReq.open('GET', 'http://api.icndb.com/jokes/random?limitTo=[nerdy]', true)
    httpReq.send();

}



//how to do it with fetch



async function getJokeAPIFetch(){
    const response = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
    console.log(response);
    if(response.status === 200){
        let jokeNode = document.getElementById("joke-header")
        let responseBody = await response.json()//we have to call this function to parse the body
        jokeNode.innerText = responseBody.value.joke
    }
}






