
const mockRequest = ()=>{
    return {
        session:{
            user:undefined
        }
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

    it('Should not allow someone who is not logged in through', ()=>{
        authenticationMiddleware(req, res, next)
        expect(res.status).toBeCalledWith(401)
        expect(res.send).toBeCalledWith('Please Login')
        expect(next).not.toBeCalled()
    })
})