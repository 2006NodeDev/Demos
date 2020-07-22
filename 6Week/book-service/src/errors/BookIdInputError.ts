import { HttpError } from "./HttpError";

export class BookIdInputError extends HttpError{
    constructor(){
        super(400, 'Id must be a number')
    }
}