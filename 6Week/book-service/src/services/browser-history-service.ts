import { BrowserHistory } from "../models/BrowserHistory";
import { getBrowserHistoryByUserId } from "../daos/SQL/browser-history-dao";
import { findbooksByIdSet } from "../daos/SQL/book-dao";
import { userServiceGetUserById } from "../remote/user-service/user-service-get-user-by-id";



export async function getBrowserHistoryByUserIdService(userId:number, token :string):Promise<BrowserHistory>{
    //we use the userid to get the set of sorted book ids
    let bookIds = await getBrowserHistoryByUserId(userId)
    //send that set of unsorted book ids to the bookd dao to get the books themselves
    let books = await findbooksByIdSet(bookIds)
    //to be implemented sort the books
    // let sortedBooks = bookIds.map((id)=>{
    //     return books.find((book)=>{
    //         return book.bookId = id
    //     })
    // })
    
    //request the use object from the user service
    let user = await userServiceGetUserById(userId, token)
    //build the browser history
    let browserHistory:BrowserHistory = {
        booksViewed:books,
        user:user
    }
    // send it back
    return browserHistory
}