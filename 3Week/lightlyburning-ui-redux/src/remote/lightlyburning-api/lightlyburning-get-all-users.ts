import { lightlyburningClient } from ".";


export const lightlyburningGetAllUsers = async () =>{
    try{
        let response = await lightlyburningClient.get('/users')
        return response.data
    }catch(e){
        console.log(e);
        console.log('We should probably handle this');
        
        
    }
}