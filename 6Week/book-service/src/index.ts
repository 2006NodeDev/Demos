import express, { Request, Response } from 'express'
import { bookRouter } from './routers/book-router'
import { loggingMiddleware } from './middleware/logging-middleware'
import { corsFilter } from './middleware/cors-filter'
import { JWTVerifyMiddleware } from './middleware/jwt-verify-middleware'




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


//app.use(authenticationMiddleware) this makes us unable to login oops!

app.use('/books', bookRouter)// redirect all requests on /books to the router


app.get('/health', (req:Request,res:Response)=>{
    res.sendStatus(200)
})



// the error handler we wrote that express redirects top level errors to
app.use((err, req, res, next) => {
    //if it is one of our custom errors
    if (err.statusCode) {
        // use the status code and the message for the response
        res.status(err.statusCode).send(err.message)
    } else {
        // if it wasnt one of our custom errors
        console.log(err)//log it out for us to debug
        //send a generic error response
        res.status(500).send('Oops, Something went wrong')
    }
})

app.listen(2007, () => {
    console.log('Server has started');
})