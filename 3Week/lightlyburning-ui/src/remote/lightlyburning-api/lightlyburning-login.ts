import { lightlyburningClient } from "."
import { User } from "../../models/User";



export const lightlyburningLogin = async (username:string, password:string) => {
    let credentials = {
        username,
        password
    }
    try{
        let response = await lightlyburningClient.post('/login', credentials)
        console.log(response);
        //this modifies the original client we made
        //all new requests have the token on them
        lightlyburningClient.defaults.headers.common['Authorization'] = response.headers.authorization
        document.cookie = `token=${response.headers.authorization}`// then we can store the token in a cookie and potentially ggrab it on start up
        
        return response.data//should be the user object
    } catch(e){
        console.log(e);
        //should probably do something is we get an error
    }
}