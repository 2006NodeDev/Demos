import express, { Request, Response } from 'express'
import { Book } from './models/Book'

const app = express()//we call the express function
//we get a completed application

// app .use matches every single http verb( get, post and delete and )
// if I don't specify a path, thats the same as every path ( '/' )
app.use(express.json())//this is an example of middle ware
// the idea of middle ware is to run requests through partial processing and let them move forward through our application
//express.json is a function that takes in the request - turns the body into a js object - and then we let the request go to the next function that it matches



app.get('/books', (req:Request, res:Response)=>{
    // .json sends the objects in Json notation
    res.json(books)
})

// for saving a new book
app.post('/books', (req:Request, res:Response)=>{
    console.log(req.body);//lets look at what the request body looks like
    let {bookId, 
        genre, 
        authors,
        publishingDate,
        publisher,
        pages,
        chapters,
        title,
        series,
        numberInSeries,
        ISBN       } = req.body //this is destructuring
        // warning if data is allowed to be null or 0, this check is not sufficient
        if(bookId && genre && authors && publishingDate && publisher && pages && chapters && title && ISBN && series && numberInSeries){
            books.push({bookId,genre,authors,publisher,publishingDate,pages,chapters,title,series,numberInSeries,ISBN})
            //sendStatus just sents an empty response with the status code provided
            res.sendStatus(201)//201 is created
        }else {
            // .status sets the status code but deson't send res
            // .send can send a response in many different content-types
            res.status(400).send("Please Fill Out All Fields")
        }
})


// this will get in the way because it matches every single request
// app.use('/', (req,res)=>{
//     res.send('Hello World')
// })

app.listen(2006, ()=>{
    console.log('Server has started');
})



let books:Book[] = [
    {
        title:'Lovely Bones',
        authors:['Alice Sebold'],
        bookId:1,
        chapters:22,
        pages:328,
        series:false,
        numberInSeries:1,
        genre:[{
            genre:'Psychological Fiction',
            genreId:1
        }],
        ISBN:'0-316-66634-4',
        publisher:'Little, Brown',
        publishingDate:2002
    },
    {
        title:'1984',
        authors:['George Orwell'],
        bookId:2,
        chapters:22,
        pages:328,
        series:false,
        numberInSeries:1,
        genre:[{
            genre:'Science Fiction',
            genreId:2
        },{
            genre:'Dystopian',
            genreId:3
        }],
        ISBN:'9783548225623',
        publisher:'Secker & Warburg',
        publishingDate:1949
    },
    {
        title:'Hobbit, The',
        authors:['J. R. R. Tolkein'],
        bookId:3,
        chapters:22,
        pages:310,
        series:false,
        numberInSeries:1,
        genre:[{
            genre:'High Fantasy',
            genreId:4
        }],
        ISBN:'9780048230706',
        publisher:'George Allen & Unwin',
        publishingDate:1937
    }
]

