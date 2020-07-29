import express, { Request, Response, NextFunction } from 'express'
import { loggingMiddleware } from './middleware/logging-middleware'
import { userRouter } from './routers/user-router'
import { BadCredentialsError } from './errors/BadCredentialsError'
import { getUserByUsernameAndPassword } from './daos/SQL/user-dao'
import { corsFilter } from './middleware/cors-filter'
import './event-listeners/new-user'
import jwt from 'jsonwebtoken'
import { JWTVerifyMiddleware } from './middleware/jwt-verify-middleware'
import { logger, errorLogger } from './utils/loggers'

// base path, something like /user-service
const basePath = process.env['LB_BASE_PATH'] || ''//use / if there is no other base path provided

const app = express()//we call the express function
//we get a completed application

// app .use matches every single http verb( get, post and delete and )
// if I don't specify a path, thats the same as every path ( '/' )
app.use(express.json({limit:'50mb'}))//this is an example of middle ware
//increase the maximum size of a body we can parse
// the idea of middle ware is to run requests through partial processing and let them move forward through our application
//express.json is a function that takes in the request - turns the body into a js object - and then we let the request go to the next function that it matches

//our custom middleware that we ant to run on all requests
app.use(loggingMiddleware)// we use use to match everything, no path to match all paths
// make sure request is in allowed origins and types
app.use(corsFilter)
//middleware for tracking connections to our server
app.use(JWTVerifyMiddleware)

const basePathRouter = express.Router()

app.use(basePath, basePathRouter)

//app.use(authenticationMiddleware) this makes us unable to login oops!


basePathRouter.use('/users', userRouter)// redirect all requests on /users to the router

//probably safe, this will be inaccessible to traffic that comes through ingress
app.get('/health', (req:Request,res:Response)=>{
    res.sendStatus(200)
})



// an endpoint that unathenticated users can send credentials to to recieve authentication
basePathRouter.post('/login', async (req:Request, res:Response, next:NextFunction)=>{
    // you could use destructuring, see ./routers/book-router
    let username = req.body.username
    let password = req.body.password
    // if I didn't get a usrname/password send an error and say give me both fields
    if(!username || !password){
        // make a custom http error and throw it or just send a res
        next( new BadCredentialsError())
    } else {
        try{
            let user = await getUserByUsernameAndPassword(username, password)
            //instead of setting session, build and send back a jwt
            let token = jwt.sign(user, 'thisIsASecret', {expiresIn: '1h'})//THE SECRET should be in an env var
            res.header('Authorization', `Bearer ${token}`)
            // so we can use that data in other requests
            res.json(user)
        }catch(e){
            next(e)
        }
    }
})





// the error handler we wrote that express redirects top level errors to
app.use((err, req, res, next) => {
    //if it is one of our custom errors
    if (err.statusCode) {
        // use the status code and the message for the response
        logger.debug(err)
        res.status(err.statusCode).send(err.message)
    } else {
        // if it wasnt one of our custom errors
        logger.error(err)//log it out for us to debug
        errorLogger.error(err)
        //send a generic error response
        res.status(500).send('Oops, Something went wrong')
    }
})

app.listen(2006, () => {
    logger.info('Server has started');
})

// if there is an uncaught error, write out a fatal log, then close the program
process.on('uncaughtException', err => {
    logger.fatal(`Uncaught Exception: ${err.message} ${err.stack}`)
    errorLogger.fatal(`Uncaught Exception: ${err.message} ${err.stack}`)
    process.exit(1)
})