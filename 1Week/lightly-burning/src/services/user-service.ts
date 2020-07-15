import { User } from "../models/User";
import { saveOneUser } from "../daos/user-dao";

import { expressEvents, expressEventEmitter } from "../express-event-emitter";





export async function saveUserService( newUser:User):Promise<User>{
    let saveduser = await saveOneUser(newUser)
    expressEventEmitter.emit(expressEvents.newUser, saveduser)
    return saveduser
}