import express, { Request, Response } from 'express'
import { Book } from './models/Book'

const app = express()//we call the express function
//we get a completed application


app.get('/books', (req:Request, res:Response)=>{
    res.json(books)
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

