import { lightlyburningClient } from "."



export const lightlyburningLogin = async (username:string, password:string) => {
    let credentials = {
        username,
        password
    }
    try{
        let response = await lightlyburningClient.post('/login', credentials)
        console.log(response);
    } catch(e){

    }
}