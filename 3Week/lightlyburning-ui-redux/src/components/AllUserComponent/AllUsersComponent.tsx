import React, { FunctionComponent, useEffect, useState } from 'react'
import { lightlyburningGetAllUsers } from '../../remote/lightlyburning-api/lightlyburning-get-all-users'
import { UserDisplayComponent } from '../UserDisplayComponent/UserDisplay'
import { User } from '../../models/User'



//the purpose of this component is to get and keep track of all user information
// provide that information to specialized display components
//most basic design pattern in react
//data display, function container <- bad name, stateful stateless, smart dumb, controller display

export const AllUsersComponent:FunctionComponent<any> = (props) => {

    //I need to fetch all the user information
    let [allUsers, changeAllUsers] = useState<User[]>([])
    //should look just like profile
    useEffect(()=>{//runs on every single re render

        //write an async function that can update state with fetched users
        const getUsers = async ()=>{
            let response = await lightlyburningGetAllUsers()
            changeAllUsers(response)
        }

        //we only call that function of we haven't already called it
        if(allUsers.length === 0){
            //get the users
            //update the state with those users
            getUsers()
        }
    })

    //this is one of the coolest things about react
    //map data into components and then put them into the jsx
    let userDisplays = allUsers.map((user)=>{
        //whwenever you make a bunch of components like this
        // react agressively suggests you give them unqie keys so it can tell them apart
        return <UserDisplayComponent key={'user-key-' + user.userId} user={user}/>
    })

    return(
        //we should turn this into a grid to make it look nicer
        <div>
            {userDisplays}
        </div>
    )
}