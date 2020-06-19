import express, { Request, Response, NextFunction } from 'express'
import { User } from '../models/User'
import { authenticationMiddleware } from '../middleware/authentication-middleware'
import { authorizationMiddleware } from '../middleware/authorization-middleware'
// our base path is /users
export const userRouter = express.Router()

// this applies this middleware to the entire router beneath it
userRouter.use(authenticationMiddleware)


// Get all
userRouter.get('/', authorizationMiddleware(['Admin']), (req:Request,res:Response,next:NextFunction)=>{
    res.json(users)
})


//get by id
userRouter.get('/:id', authorizationMiddleware(['Admin', 'Manager']), (req:Request, res:Response)=>{
    let {id} = req.params
    if(isNaN(+id)){
        // send a response telling them they need to give us a number
        res.status(400).send('Id needs to be a number')// the error way is better because it scales easier, fewer places you have to change code if you want to refactor
    } else {
        let found = false
        for(const user of users){
            if(user.userId === +id){
                res.json(user)// successfully foundthe user based on id
                found = true
            }
        }
        if(!found){
            res.status(404).send('User Not Found')//the id doesn't exist
        }
    }
})

//save new

//patch user

//delete user


//fake data
export let users:User[] = [
    {
        userId:1,
        username:'ILoveBooks',
        password:'password',
        email:'cool@books.com',
        role:'Admin'
    },
    {
        userId:2,
        username:'BooksAreOkay',
        password:'password',
        email:'lame@books.com',
        role:'User'
    },
    {
        userId:3,
        username:'BooksFoLife',
        password:'password',
        email:'book@books.com',
        role:'Admin'
    }
]