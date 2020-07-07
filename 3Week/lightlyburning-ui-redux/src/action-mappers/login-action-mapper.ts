import { lightlyburningLogin } from "../remote/lightlyburning-api/lightlyburning-login"

export const loginTypes = {
    SUCCESSFUL_LOGIN: 'LB_SUCCESSFUL_LOGIN',
    BAD_CREDENTIALS: 'LB_BAD_CREDENTIALS',
    INTERNAL_SERVER: 'LB_LOGIN_INTERNAL_SERVER',
    BAD_REQUEST: 'LB_LOGIN_BAD_REQUEST',
    RESET_ERROR: 'LB_RESET_ERROR'
}



//when it comes to async processes, we can't just return the action object
//disptach cannot properly organize and time async events
//we have a solution called redux thunk
//we will return the async function and redux thunk sits in the middle and intercepts the function 
//and calls dispatch a second time with the real object
export const lbLoginActionMapper = (username:string, password:string) => async (dispatch:any) => {
    try{
        let currentUser = await lightlyburningLogin(username,password)
        dispatch({
            type:loginTypes.SUCCESSFUL_LOGIN,
            payload:{
                currentUser
            }
        })
    } catch(e){        
        if(e.message.includes('400')){
            dispatch({
                type:loginTypes.BAD_REQUEST
            })
        } else if (e.message.includes('401')){
            dispatch({
                type:loginTypes.BAD_CREDENTIALS
            })
        }else {
            dispatch({
                type:loginTypes.INTERNAL_SERVER
            })
        }
        
    }
}


export const loginErrorReset = () =>{
    return{
        type:loginTypes.RESET_ERROR
    }
}
