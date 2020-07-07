import React, { FunctionComponent, useState, SyntheticEvent, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { lightlyburningLogin } from '../../remote/lightlyburning-api/lightlyburning-login'
import {RouteComponentProps} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { lbLoginActionMapper, loginErrorReset } from '../../action-mappers/login-action-mapper'
import { IState } from '../../reducers'
import { toast } from 'react-toastify'

//the interface called route component props just defines history match and location


export const LoginComponent:FunctionComponent<any> = (props) => {

    //we need to keep track of a username and a password
    const [username, changeUsername] = useState('')// two bits of state from react
    const [password, changePassword] = useState('')// one for username, one for password
    // there used to be the user state here - now it is from props
    const errorMessage = useSelector((state:IState)=>{
        return state.loginState.errorMessage
    })

    const dispatch = useDispatch();

    const updateUsername = (event:any) => {//callback for events
        event.preventDefault()//stop the default behaviour of the event
        changeUsername(event.currentTarget.value)//call the state changing function with new value from user
    }

    const updatePassword = (event:any) => {
        event.preventDefault()
        changePassword(event.currentTarget.value)
    }

    const loginSubmit = async (e:SyntheticEvent) => {//sythentic events are react interface for converting between the many different types of browser events
        e.preventDefault()
        //has to get the action for a login attempt - one of 4 different actions
        //we get that action here and dispatch to the reducer
        let thunk = lbLoginActionMapper(username,password)
        dispatch(thunk)

    }

    useEffect(()=>{
        if(errorMessage){
            toast.error(errorMessage)
            //should reset the error message after we toast
            dispatch(loginErrorReset())
        }
    })
    

    return (
        <div>
            {/* by default the submit event in a form tries to send a get request to the href value in the form */}
            <form autoComplete="off" onSubmit={loginSubmit}>
                <TextField id="standard-basic" label="Username" value={username} onChange={updateUsername}/>
                <TextField id="standard-basic" type='password' label="Password" value={password} onChange={updatePassword} />
                <Button type='submit' variant="contained" color="primary">Login</Button>
            </form>
        </div>
    )
}