import { Genre } from "./Genre"

export class Book {
    bookId:number//we chose this to be the identifier
    title:string
    authors:string[]//we should probably update this to like a person evenetually
    pages:number
    chapters:number
    publisher:string
    publishingDate:number
    genre:Genre[]
    series:boolean
    numberInSeries:number
    ISBN:string
}