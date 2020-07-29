import { Book } from "./Book";
import { User } from "./User";


export class BrowserHistory {
    booksViewed:Book[]//pre sorted from newest to oldest
    user:User// a little extraneous, especially if users can only get their own browsing history
    //its here for demos sake
}