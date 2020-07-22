export abstract class HttpError extends Error {
    statusCode:number//we extended to add on a new field to error
    constructor(statusCode:number, message?:string){
        super(message)
        this.statusCode = statusCode
    }
}