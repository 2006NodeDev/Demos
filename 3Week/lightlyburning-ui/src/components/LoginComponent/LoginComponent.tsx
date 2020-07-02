import React, { FunctionComponent, useState, SyntheticEvent } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { lightlyburningLogin } from '../../remote/lightlyburning-api/lightlyburning-login'


export const LoginComponent:FunctionComponent<any> = (props) => {

    //we need to keep track of a username and a password
    const [username, changeUsername] = useState('')// two bits of state from react
    const [password, changePassword] = useState('')// one for username, one for password

    const updateUsername = (event:any) => {//callback for events
        event.preventDefault()//stop the default behaviour of the event
        changeUsername(event.currentTarget.value)//call the state changing function with new value from user
    }

    const updatePassword = (event:any) => {
        event.preventDefault()
        changePassword(event.currentTarget.value)
    }

    const loginSubmit = (e:SyntheticEvent) => {//sythentic events are react interface for converting between the many different types of browser events
        e.preventDefault()
        lightlyburningLogin(username, password)
        changePassword('')
    }

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