
const mockRequest = ()=>{
    return {
        user:undefined
    }
}

const mockResponse =() => {
    let res:any = {}
    res.status = jest.fn().mockReturnValue(res)
    res.send = jest.fn().mockReturnValue(res)
    return res
}




import { authenticationMiddleware } from './authentication-middleware'

describe('authenticationMiddleware', ()=>{
    
    let req;
    let res;
    let next;

    //runs our setup before each individual test
    beforeEach(()=>{
        req = mockRequest()
        res = mockResponse()
        next = jest.fn()
    })

    it('Should not allow someone who is not logged in through', ()=>{
        //calls the middleware with a non existenent user
        authenticationMiddleware(req, res, next)
        expect(res.status).toBeCalledWith(401)
        expect(res.send).toBeCalledWith('Please Login')
        expect(next).not.toBeCalled()
    })

    it('Should allow through someone who is logged in', ()=>{
        req.user = {//set up the user object
            username:'alec',
            role:'admin'
        }
        console.log = jest.fn()//mock console.log
        authenticationMiddleware(req,res,next)
        expect(res.status).not.toBeCalled()
        expect(res.send).not.toBeCalled()
        expect(next).toBeCalled()
        expect(console.log).toBeCalledWith('user alec has a role of admin')

    })

})