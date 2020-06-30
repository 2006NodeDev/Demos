let blue = document.getElementById('1')
let green = document.getElementById('2')
let red = document.getElementById('3')
let purple = document.getElementById('4')

// we choose an event and a node, then we attach a callback function to that node and that will get run on that event
blue.addEventListener('click', (e)=>{
    e.stopPropagation() // this will stop the event from doing what it normally does
    if(!blue.style.backgroundColor){
        blue.style.backgroundColor = 'blue'
    }else {
        blue.style.backgroundColor = ''
    }
    setTimeout(()=>{
        green.dispatchEvent(new Event('click'))
    }, 500)
}, true)// to actually do capturing, you set a true after the callback in the vent listner

green.addEventListener('click', (e)=>{
    e.stopPropagation()
    if(!green.style.backgroundColor){
        green.style.backgroundColor = 'green'
    }else {
        green.style.backgroundColor = ''
    }
    setTimeout(()=>{
        red.dispatchEvent(new Event('click'))
    }, 500)
})

red.addEventListener('click', (e)=>{
    e.stopPropagation()
    if(!red.style.backgroundColor){
        red.style.backgroundColor = 'red'
    }else {
        red.style.backgroundColor = ''
    }
    setTimeout(()=>{
        purple.dispatchEvent(new Event('click'))
    }, 500)

})

purple.addEventListener('click', (e)=>{
    e.stopPropagation()
    if(!purple.style.backgroundColor){
        purple.style.backgroundColor = 'purple'
    }else {
        purple.style.backgroundColor = ''
    }
})

