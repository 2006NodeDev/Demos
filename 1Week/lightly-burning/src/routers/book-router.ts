import express, { Request, Response } from 'express'
import { BookUserInputError } from '../errors/BookUserInputError'
import { BookIdInputError } from '../errors/BookIdInputError'
import { BookNotFoundError } from '../errors/BookNotFoundError'
import { Book } from '../models/Book'
import { authenticationMiddleware } from '../middleware/authentication-middleware'
import { loggingMiddleware } from '../middleware/logging-middleware'

// is like a sub division of the application itself
export let bookRouter = express.Router()
// the router already has the path /books so we assume that every endpoint inside of the router already match /books

bookRouter.get('/', (req: Request, res: Response) => {
    // .json sends the objects in Json notation
    res.json(books)
})

// for saving a new book
// this endpoint will run all the middleware functions one at a time
bookRouter.post('/', loggingMiddleware, authenticationMiddleware, (req: Request, res: Response) => {
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
        books.push({ bookId, genre, authors, publisher, publishingDate, pages, chapters, title, series, numberInSeries, ISBN })
        //sendStatus just sents an empty response with the status code provided
        res.sendStatus(201)//201 is created
    } else {
        // .status sets the status code but deson't send res
        // .send can send a response in many different content-types
        throw new BookUserInputError()
    }
})

//express supports path params natively by putting : in the path
// express takes the value in the : and puts it on the request object
bookRouter.get('/:id', (req: Request, res: Response) => {
    let { id } = req.params// destructring
    //goal is to return a specific book that matches the id we got
    // the id could be bad - string instead of a number -- BookIdInputError
    // the id could not exist -- BookNotFound
    if (isNaN(+id)) {// we can use the + to convert a variable to a number - node says do it this way
        throw new BookIdInputError()//we didn't get a number in the path
    } else {
        let found = false
        for (const book of books) {
            if (book.bookId === +id) {
                res.json(book)
                found = true
            }
        }
        if (!found) {
            //we looped through and couldn't find the book
            throw new BookNotFoundError()
        }

    }
})


let books: Book[] = [
    {
        title: 'Lovely Bones',
        authors: ['Alice Sebold'],
        bookId: 1,
        chapters: 22,
        pages: 328,
        series: false,
        numberInSeries: 1,
        genre: [{
            genre: 'Psychological Fiction',
            genreId: 1
        }],
        ISBN: '0-316-66634-4',
        publisher: 'Little, Brown',
        publishingDate: 2002
    },
    {
        title: '1984',
        authors: ['George Orwell'],
        bookId: 2,
        chapters: 22,
        pages: 328,
        series: false,
        numberInSeries: 1,
        genre: [{
            genre: 'Science Fiction',
            genreId: 2
        }, {
            genre: 'Dystopian',
            genreId: 3
        }],
        ISBN: '9783548225623',
        publisher: 'Secker & Warburg',
        publishingDate: 1949
    },
    {
        title: 'Hobbit, The',
        authors: ['J. R. R. Tolkein'],
        bookId: 3,
        chapters: 22,
        pages: 310,
        series: false,
        numberInSeries: 1,
        genre: [{
            genre: 'High Fantasy',
            genreId: 4
        }],
        ISBN: '9780048230706',
        publisher: 'George Allen & Unwin',
        publishingDate: 1937
    }
]

