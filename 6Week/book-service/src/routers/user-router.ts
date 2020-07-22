import express, { Request, Response, NextFunction } from 'express'
//import { authenticationMiddleware } from '../middleware/authentication-middleware'

import { authorizationMiddleware } from '../middleware/authorization-middleware'
import { UserUserInputError } from '../errors/UserUserInputError'
import { User } from '../models/User'
import { saveOneUserService, getUserByIDService, getAllUsersService } from '../services/user-service'
// our base path is /users
export const userRouter = express.Router()

// this applies this middleware to the entire router beneath it
//userRouter.use(authenticationMiddleware)


// Get all
userRouter.get('/', authorizationMiddleware(['Admin']), async (req: Request, res: Response, next: NextFunction) => {
    //this function needs to get all the user data - outside its scope 
    // we should call a function that gets us the user data
    //if we get it successfully, we want to return it using res.json
    //if we get an error we want to pass that error to the error handler with next(err)
    // interacting with the database is asynchronous, which means the getAllUser function returns a promise
    // can this function execute with only a promise?
    try {
        //lets try not being async and see what happens
        let allUsers = await getAllUsersService()//thinking in abstraction
        res.json(allUsers)
    } catch (e) {
        next(e)
    }
})


//get by id
userRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.params
    if (isNaN(+id)) {
        // send a response telling them they need to give us a number
        res.status(400).send('Id needs to be a number')// the error way is better because it scales easier, fewer places you have to change code if you want to refactor
    } else {
        try {
            let user = await getUserByIDService(+id)
            res.json(user)
        } catch (e) {
            next(e)
        }
    }
})

//save new
userRouter.post('/',  async (req: Request, res: Response, next: NextFunction) => {
    // get input from the user
    let { username, password, email, role, image } = req.body//a little old fashioned destructuring
    //verify that input
    if (!username || !password || !role) {
        next(new UserUserInputError)
    } else {
        //try  with a function call to the dao layer to try and save the user
        let newUser: User = {
            username,
            password,
            role,
            userId: 0,
            email,
            image,
        }
        newUser.email = email || null
        try {
            let savedUser = await saveOneUserService(newUser)
            res.json(savedUser)// needs to have the updated userId
        } catch (e) {
            next(e)
        }
    }




    //catch with next(e)


})




//patch user

//delete user


