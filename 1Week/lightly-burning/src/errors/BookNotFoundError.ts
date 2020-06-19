import { HttpError } from "./HttpError";

export class BookNotFoundError extends HttpError{
    constructor(){
        super(404, 'That Book Does Not Exist')
    }
}