import { BookDTO } from "../dtos/book-dto";
import { Book } from "../models/Book";
import { Genre } from "../models/Genre";

// works perfectly with the map function
export function BookDTOtoBookConvertor( bto:BookDTO):Book{
    let genre:Genre[] = [];
    for(const g of bto.genres){
        genre.push({genreId:0, genre:g})// this si a problem to solve in the future
    }
    return {
        ISBN: bto.ISBN.toString(),
        authors:bto.authors,
        genre,
        bookId:bto.book_id,
        chapters:bto.chapters,
        pages:bto.pages,
        numberInSeries:bto.number_in_series,
        publisher:bto.publisher,
        publishingDate: bto.publishing_date.getFullYear(),
        series:bto.series,
        title:bto.title
    }
}