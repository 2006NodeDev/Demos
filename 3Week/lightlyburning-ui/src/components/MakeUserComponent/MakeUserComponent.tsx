import React, { FunctionComponent, SyntheticEvent, useState } from 'react'
import { lightlyburningSaveUser } from '../../remote/lightlyburning-api/lightlyburning-save-user'



export const MakeUserComponent:FunctionComponent<any> = (props) => {

    const [image, changeImage] = useState(undefined)

    const imageChange = (e:any)=>{
        let reader = new FileReader()
        reader.readAsDataURL(e.currentTarget.files[0])
        reader.onload= (ev)=>{
            console.log(reader.result)
            changeImage(reader.result)
        }
        
    }

    const submitForm = async (e:any)=>{
        e.preventDefault()
        let res = await lightlyburningSaveUser({
            image,
            email: 'ian@fu.com',
            password: 'password',
            role:'Admin',
            userId:0,
            username:'IMoy'
        })
        console.log(res)
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor='file'>Profile Pic</label>
                <input type='file' name='file' accept='image/*' onChange={imageChange}/>
                <button type='submit'>Submit this shit form</button>
            </form>
            <img src={image} />
        </div> 
    )
}