import {  Response, NextFunction } from "express";
import { logger } from "../utils/loggers";


export function authenticationMiddleware(req:any, res:Response, next:NextFunction){
    if(!req.user) {//we probably want to look for something else now because session will no longer exist
        res.status(401).send('Please Login')// this could be an error as well
    } else{
        logger.debug(`user ${req.user.username} has a role of ${req.user.role}`);
        next()
    }
}