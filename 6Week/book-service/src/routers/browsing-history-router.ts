import Express from 'express'
import { getBrowserHistoryByUserIdService } from '../services/browser-history-service'
import { authenticationMiddleware } from '../middleware/authentication-middleware'



export const browserHistoryRouter = Express.Router()

browserHistoryRouter.use(authenticationMiddleware)


browserHistoryRouter.get('/users/:userId',  async (req,res,next)=>{
    try{
        let {userId} = req.params
        let browserHistory = await getBrowserHistoryByUserIdService(+userId, req.headers.authorization)
        res.json(browserHistory)
    }catch(e){
        next(e)
    }
})