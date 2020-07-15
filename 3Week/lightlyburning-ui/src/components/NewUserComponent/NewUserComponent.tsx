import React, { FunctionComponent, SyntheticEvent, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { User } from '../../models/User'
import {toast} from 'react-toastify'
import { lightlyburningSaveUser} from '../../remote/lightlyburning-api/lightlyburning-save-user'
import { read } from 'fs'


export const NewUserComponent: FunctionComponent<any> = (props) => {
    let [username, changeUsername] = useState('')
    let [password, changePassword] = useState('')
    let [confirmPassword, changeConfirmPassword] = useState('')
    let [email, changeEmail] = useState('')
    let [image, changeImage] = useState(undefined)

    const updateUsername = (e:any) => {
        e.preventDefault()
        changeUsername(e.currentTarget.value)
    }
    const updatePassword = (e:any) => {
        e.preventDefault()
        changePassword(e.currentTarget.value)
    }
    const updateConfirmPassword = (e:any) => {
        e.preventDefault()
        changeConfirmPassword(e.currentTarget.value)
    }
    const updateEmail = (e:any) => {
        e.preventDefault()
        changeEmail(e.currentTarget.value)
    }

    const updateImage = (e:any) => {
        let file:File = e.currentTarget.files[0]// the tag contains an array of files, we want the first and only
        //blast to the past and utiliza an old school FileReader
        let reader = new FileReader()
        //we start an async function on the reader object
        reader.readAsDataURL(file)
        //set a callback function forr when the reader finishes
        reader.onload = () => {
            console.log(reader.result)
            changeImage(reader.result)
        }
    }



    const submitUser = async (e: SyntheticEvent) => {
        e.preventDefault()
        if(password !== confirmPassword){
            toast.error('Password Do Not Match')
        }

        let newUser:User = {
            role: 'User',
            username,
            password,
            email,
            userId:0,
            image
        }

        let res = await lightlyburningSaveUser(newUser)

    }


    return (
        <div>
            <form onSubmit={submitUser}>
                <TextField id="standard-basic" label="Username" value={username} onChange={updateUsername} />
                <TextField id="standard-basic" type='password' label="password" value={password} onChange={updatePassword}/>
                <TextField id="standard-basic" type='password' label="confirm password" value={confirmPassword} onChange={updateConfirmPassword}/>
                <TextField id="standard-basic" type='email' label="email" value={email} onChange={updateEmail}/>
                {/* figure out how to do role on your own, look at select component from material ui */}
                <label htmlFor='file'>Profile Pic</label>
                <input type='file' name='file' accept='image/*' onChange={updateImage}   />
                <img src={image}/>
                <Button variant="contained" type='submit'>Submit</Button>
            </form>
        </div>
    )
}