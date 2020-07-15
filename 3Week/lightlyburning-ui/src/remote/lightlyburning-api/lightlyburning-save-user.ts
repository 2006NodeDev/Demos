import { lightlyburningClient } from ".";
import { User } from "../../models/User";

export const lightlyburningSaveUser = async (newUser:User) => {
    
    try{
        let response = await lightlyburningClient.post('/users', newUser)
        console.log(response);
        return response.data//should be the user object
    } catch(e){
        console.log(e);
        //should probably do something is we get an error
    }
}