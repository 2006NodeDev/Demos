import { Request, Response, NextFunction } from "express";

// when someone sends us a request, we want to log where the sent it from and what kind of request they sent
export function loggingMiddleware(req:Request,res:Response,next:NextFunction){
    console.log(`${req.method} Request from ${req.ip} to ${req.path} `)
    next()// tells express this function is done, and move to the next matching piece of middleware
}