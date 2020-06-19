import express from 'express'
import { bookRouter } from './routers/book-router'
import { loggingMiddleware } from './middleware/logging-middleware'

const app = express()//we call the express function
//we get a completed application

// app .use matches every single http verb( get, post and delete and )
// if I don't specify a path, thats the same as every path ( '/' )
app.use(express.json())//this is an example of middle ware
// the idea of middle ware is to run requests through partial processing and let them move forward through our application
//express.json is a function that takes in the request - turns the body into a js object - and then we let the request go to the next function that it matches

//our custom middleware that we ant to run on all requests
app.use(loggingMiddleware)// we use use to match everything, no path to match all paths

app.use('/books', bookRouter)// redirect all requests on /books to the router


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

app.listen(2006, () => {
    console.log('Server has started');
})