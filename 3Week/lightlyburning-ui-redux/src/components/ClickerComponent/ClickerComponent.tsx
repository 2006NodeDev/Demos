import React, { FunctionComponent, useState } from 'react'
import Button from '@material-ui/core/Button'
import { TitleComponent } from '../TitleComponent/TitleComponent'
import { User } from '../../models/User'
import {Redirect} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { IState, state } from '../../reducers'
import { updateClicks } from '../../action-mappers/clicker-action-mappers'




export const ClickerComponent: FunctionComponent<any> = (props) => {
    // lets make these clicks go into the redux store
    //use selector is a hook from redux
    //it takes a selector function and uses it to grab some data from the total state
    const clicks = useSelector((state:IState)=>{
        return state.clickerState.clicks
    })
    const currentUser = useSelector((state:IState)=>{
        return state.loginState.currentUser
    })

    //this is all you have to do to get access to the dispatch function
    const dispatch = useDispatch()

    //this function is the callback for when they click on the button
    const clicksOnClick = () =>{
        let action = updateClicks(1)//this function gets us the action object
        dispatch(action)//dispatch sends the action object to the combined reducer
    }

    return (
        (currentUser) ?
        <div>
            {/* By taking a value from state and embbeding it into the display we are doing something we call data binding 
            fundamental property of react web design*/}
            <TitleComponent size='small' title={`Welcome ${currentUser.username}! you have ${clicks} number of clicks`} />
            {/* when handling an event we need to provide a callback function, not a function call
            if you weant to call a specific function with a specific value when an event takes place
            wrap that function call in an anonymous function
            changeClicks(2) -- function call
            ()=>(changeClicks(2)) -- this is a fcuntion that calls changeClicks with a specific value */}
            <Button variant="contained" color="primary" onClick={clicksOnClick}>{/* this is event binding, we bind an event to a function that manipulates state */}
                Click
            </Button>
        </div>
        :
        <Redirect to='/login'/>
    )


}