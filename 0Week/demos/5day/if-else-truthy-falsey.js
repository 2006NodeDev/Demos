
if(1 == 'Hello') {
    console.log('1 == hello');
} else if (1 == '1'){
    console.log('1 == "1"');
}
//with boolean conditions, we can literally put in any values we want
// falsey values are null, undefined, 0, '', NaN, false
if({}){
    console.log('{} true?');  
}

if((10 * 'cat')){
    console.log('10 * cat true');
} else {
    console.log('10 * cat false');   
}


