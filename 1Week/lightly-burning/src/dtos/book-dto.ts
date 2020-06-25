// this is going to be a representation of the book data we get from the database
// not what we send to the user, this is the database version
export class BookDTO {
    book_id: number
    pages: number
    chapters:number
    ISBN: number
    series: boolean
    number_in_series:number
    publisher: string
    publishing_date: Date
    title: string
    authors: string[]
    genres: string[]
}