//index is the entrypoint for a folder
//the really important stuff goes here

import { combineReducers } from "redux";
import { clickerReducer } from "./clicker-reducer";
import { User } from "../models/User";
import { loginReducer } from "./login-reducer";

//interface for clicker
export interface IClickerState{
    clicks:number
}

//interface for login
export interface ILoginState{
    currentUser:User,
    errorMessage:string
}

//interface for Users


//the type definition for our entire state object
export interface IState{//the data that will make up our application
    clickerState:IClickerState
    loginState:ILoginState
}




//this will be the total state of our redux store
export const state = combineReducers<IState>({
    //all of the sub reducer functions go in here
    clickerState:clickerReducer,
    loginState:loginReducer
})