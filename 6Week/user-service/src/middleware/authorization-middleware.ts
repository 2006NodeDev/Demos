// different users have different roles
// different roles allow you to do different things
// different endpoints require different roles
//before I allow someone to access an endpoint, I want to make sure they have a role that matches that endpoints allowed roles

import { Response, NextFunction } from "express";

// utilize the factory pattern, we provide an array of accepted roles, and return a function that allows those roles through
// this function is a middleware factory
export function authorizationMiddleware(roles:string[]){// build a middleware function
    return (req:any, res:Response, next:NextFunction) => {
        let allowed = false
        for(const role of roles){
            if(req.user.role === role){//we probably want to look for something else now because session will no longer exist
                //we found a matching role, allow them in
                allowed = true
                next()
            }
        }
        if(!allowed){
            // if they didn't have a matching role kick em out
            res.status(403).send('YOu have insufficent permissions for this endpoint')
        }
    }

}


// allow admin+manager

//allow only admin

//allow user + manage + admin

//allow user + admin

