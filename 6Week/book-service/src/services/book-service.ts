import { getAllBooks, findbookById } from "../daos/SQL/book-dao";
import { Book } from "../models/Book";
import { saveBrowsingHistory } from "../daos/SQL/browser-history-dao";



export async function getAllBooksService():Promise<Book[]>{
    return await getAllBooks()
}


export async function findBookByIDService(id:number, userId:number):Promise<Book>{

    let book = await findbookById(id)
    //do some browser history stuff
    await saveBrowsingHistory(id, userId)

    return book
}