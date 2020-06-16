let arr = [
    10, 
    678,
    0,
    'HelloWorld',
    {
        name:'Alec'
    },
    [1,2,'red','blue'],
    ()=>{
        console.log('Arrays are wild');
    }
]

console.log(arr);

arr.reverse()

arr.push('Push it')
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.pop());

arr.splice(1, 2, 'This', 50)

console.log(arr);

// .map
// .filter
// .reduce

console.log(arr[100]);
