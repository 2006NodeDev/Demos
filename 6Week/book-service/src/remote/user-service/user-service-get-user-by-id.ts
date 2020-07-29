import { userServiceBaseClient } from ".";
import { User } from "../../models/User";


export const userServiceGetUserById = async (userId:number, token:string) => {
    try{
        let res = await userServiceBaseClient.get(`/users/${userId}`, {
            headers:{
                'Authorization': token
            }
        })
        return res.data
    }catch(e){
        console.log(e);
        let defaultUser = new User()
        defaultUser.userId = userId
        return defaultUser
    }
}