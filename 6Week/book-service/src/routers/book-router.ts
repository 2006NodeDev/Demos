import express, { Request, Response, NextFunction } from 'express'
import { BookUserInputError } from '../errors/BookUserInputError'
import { BookIdInputError } from '../errors/BookIdInputError'
import { authenticationMiddleware } from '../middleware/authentication-middleware'
import { getAllBooksService, findBookByIDService } from '../services/book-service'

// is like a sub division of the application itself
export let bookRouter = express.Router()
// the router already has the path /books so we assume that every endpoint inside of the router already match /books

bookRouter.use(authenticationMiddleware)

bookRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    // .json sends the objects in Json notation
    try {
        let books = await getAllBooksService()
        res.json(books)
    } catch (e) {
        next(e)
    }

})

// for saving a new book
// this endpoint will run all the middleware functions one at a time
bookRouter.post('/', (req: Request, res: Response) => {
    console.log(req.body);//lets look at what the request body looks like
    let { bookId,
        genre,
        authors,
        publishingDate,
        publisher,
        pages,
        chapters,
        title,
        series,
        numberInSeries,
        ISBN } = req.body //this is destructuring
    // warning if data is allowed to be null or 0, or false, this check is not sufficient
    if (bookId && genre && authors && publishingDate && publisher && pages && chapters && title && ISBN && (!series && typeof (series) === 'boolean' || series) && numberInSeries) {
        //books.push({ bookId, genre, authors, publisher, publishingDate, pages, chapters, title, series, numberInSeries, ISBN })
        //sendStatus just sents an empty response with the status code provided
        res.sendStatus(501)//201 is created
    } else {
        // .status sets the status code but deson't send res
        // .send can send a response in many different content-types
        throw new BookUserInputError()
    }
})

//express supports path params natively by putting : in the path
// express takes the value in the : and puts it on the request object
bookRouter.get('/:id', async (req:any, res: Response, next:NextFunction) => {
    let { id } = req.params// destructring
    //goal is to return a specific book that matches the id we got
    // the id could be bad - string instead of a number -- BookIdInputError
    // the id could not exist -- BookNotFound
    if (isNaN(+id)) {// we can use the + to convert a variable to a number - node says do it this way
        next(new BookIdInputError())//we didn't get a number in the path
    } else {
        try {
            let book = await findBookByIDService(+id, req.user.userId)
            res.json(book)
        } catch(e){
            next(e)
        }
    }
})

