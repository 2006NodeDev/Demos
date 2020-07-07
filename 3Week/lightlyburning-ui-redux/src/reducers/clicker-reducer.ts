//in our reducer files we are going to have 2 important pieces
import {IClickerState} from './index'
import { AnyAction } from 'redux'
import { clickerTypes } from '../action-mappers/clicker-action-mappers'
//one we will set up the initial state of the redux store
const initialState:IClickerState = {
    clicks:500
}
//we will make the reducer function
                                //if I set an arguement = to a value, that means if a value is not provided, use the thing on the right
export const clickerReducer = (state = initialState, action:AnyAction)=>{
    switch(action.type){
        //every single case should return state
        //each case represents a different action for updating state
        case clickerTypes.CLICKER_UPDATE_CLICKS:{
            return {
                ...state,//always do this, or you will potentially lose data ( crazy ts errors)
                clicks: state.clicks + action.payload.clickDelta
            }
        }
        case 'error':{
            return state//needs to be modified
        }
        //if we don't match any of the cases, just return the old value because the action had nothing to do with us
        default:{
            //this default case is important and you should have it
            return state
        }

    }
}
