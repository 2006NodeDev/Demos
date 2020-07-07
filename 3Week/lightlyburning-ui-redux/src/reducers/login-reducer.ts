import { ILoginState } from ".";
import { AnyAction } from "redux";
import { loginTypes } from "../action-mappers/login-action-mapper";


const initialState:ILoginState = {
    currentUser:undefined,
    errorMessage:''
}

export const loginReducer = (state= initialState, action:AnyAction) => {
    switch (action.type) {
        case loginTypes.BAD_CREDENTIALS:{
            return {
                ...state,
                errorMessage:'Incorrect Username or Password'
            }
        }
        case loginTypes.BAD_REQUEST : {
            return {
                ...state,
                errorMessage:'Please Fill Out All Fields'
            }
        }
        case loginTypes.INTERNAL_SERVER: {
            return {
                ...state,
                errorMessage:'Oops, Something Went Wrong'
            }
        }
        case loginTypes.SUCCESSFUL_LOGIN:{
            return {
                ...state,
                currentUser:action.payload.currentUser
            }
        }
        case loginTypes.RESET_ERROR:{
            return {
                ...state,
                errorMessage:''
            }
        }
        default:{
            return state
        }
    }
}