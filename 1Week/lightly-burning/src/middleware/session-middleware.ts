import session, { SessionOptions } from 'express-session'

// just take it from me, don't worry about it so much
const sessionConfig:SessionOptions = {
    secret: 'secret',//this is not what you should do in production
    cookie:{
        secure:false
    },
    resave:false,
    saveUninitialized:false
}


// this pattern is where we provide some configuration to a function 
// and then it builds us a function for us to use

export const sessionMiddleware = session(sessionConfig)//session is a factory function, config is the options
// it returns a function in the form of ( req, res, next ) => {
// it attaches a session object to the request where each uniqie connection to the server has a unique session
// and then
// next()
//}