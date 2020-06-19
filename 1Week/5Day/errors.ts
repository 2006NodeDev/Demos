
function f1 (param?:number){//optional param
    try{
        f2()
    } catch (e){
        console.log(e);
    }finally{
        console.log('I always do this');
        
    }

}

function f2 (){
    f3()
    console.log('F2 is finished');
    
}

function f3 (){
    console.log('Oops this code is bad');
    let e = new Error()
    throw e
}

f1()



