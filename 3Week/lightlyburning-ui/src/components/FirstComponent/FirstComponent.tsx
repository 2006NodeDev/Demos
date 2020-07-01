import React from 'react';// you have to import React from react

//you need a capital letter
export function FirstComponent(props:any){
    //you have to return jsx
    return (
        //there must be one root level tag in the jsx
        <div>
            <h3>This is Our First Component</h3>
        </div>
    );//without the paraenthese the interperator tries to put a semicolon after every line of jsx
}