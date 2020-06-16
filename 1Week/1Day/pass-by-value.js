let x = 10//is a primitive

let obj = { //is a reference
    num:10
}

function changeValue ( primitive, reference){
    primitive = 15//this is a different primitive
    //this is different copy of the same reference 
    reference.num = 15//but if we have the reference we have access to the object

}
changeValue(x,obj)
//x? obj.num?
console.log(` x has a value of ${x} and obj.num has a value of ${obj.num}`);
