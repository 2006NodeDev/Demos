import { User } from "../../models/User";
import { lightlyburningClient } from ".";



export const lightlyburningSaveUser = async (user:User) => {
    
    try{
        let response = await lightlyburningClient.post('/users', user)
        console.log(response);
        return response.data//should be the user object
    } catch(e){
        console.log(e);
        //should probably do something is we get an error
    }
}