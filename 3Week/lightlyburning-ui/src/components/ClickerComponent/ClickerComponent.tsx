import React, { FunctionComponent, useState } from 'react'
import Button from '@material-ui/core/Button'
import { TitleComponent } from '../TitleComponent/TitleComponent'


export const ClickerComponent: FunctionComponent<any> = (props) => {

    const [clicks, changeClicks] = useState(0)// this is a function provided by react to allow us to keep track of data within the component
    //it returns 2 values, the first being the object that is state, 
    // the second thing is a fuinction that sets state to whatever the argurment of that function is
    //use state stakes in a single arguement, the initial state
    // the value clicks is immutable, it can only be changed using the function we got alongside


    return (
        <div>
            {/* By taking a value from state and embbeding it into the display we are doing something we call data binding 
            fundamental property of react web design*/}
            <TitleComponent size='small' title={`Welcome! you have ${clicks} number of clicks`} />
            {/* when handling an event we need to provide a callback function, not a function call
            if you weant to call a specific function with a specific value when an event takes place
            wrap that function call in an anonymous function
            changeClicks(2) -- function call
            ()=>(changeClicks(2)) -- this is a fcuntion that calls changeClicks with a specific value */}
            <Button variant="contained" color="primary" onClick={()=>(changeClicks(clicks + 1))}>{/* this is event binding, we bind an event to a function that manipulates state */}
                Click
            </Button>
        </div>
    )


}