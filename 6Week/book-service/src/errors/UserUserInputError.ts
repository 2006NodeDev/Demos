import { HttpError } from "./HttpError";

//a specific impl of HTTPError
export class UserUserInputError extends HttpError {
    constructor(){//has no params
        super(400, 'Please Fill Out All User Fields')
    }
}