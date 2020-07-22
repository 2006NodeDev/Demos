// this is going to contain all the functions that interact wit hthe book table

import { PoolClient, QueryResult } from "pg";
import { connectionPool } from ".";
import { BookDTOtoBookConvertor } from "../../utils/BookDTO-to-Book-converter";
import { BookNotFoundError } from "../../errors/BookNotFoundError";

const schema = process.env['LB_SCHEMA'] || 'lightlyburning_book_service'


/*
    takes in no inputs 
    output of every book from the database
    data should be output in the form of a Book[]
*/
//if we swap to different database like oracle, or maybe even a nosql database
//so long as this function continues to return all of the books
//we don't have to chnage any other code in the program
export async function getAllBooks() {
    let client: PoolClient;// this will be the "connection" we borrow from the pool but 
    //that process can take some time and can fail so we declare the var ahead of time
    try {
        client = await connectionPool.connect()
        let results: QueryResult = await client.query(`select b.book_id, b."pages", b.chapters, b."ISBN" ,b.series , b.number_in_series , b.publisher , b.publishing_date , b.title, array_agg(distinct (a.author)) as authors, array_agg(distinct (g.genre)) as genres 
                                                    from ${schema}.books b 
                                                    natural join ${schema}.books_authors ba 
                                                    natural join ${schema}.authors a
                                                    natural join ${schema}.books_genre bg
                                                    natural join ${schema}.genre g
                                                    group by b.book_id;`)
        return results.rows.map(BookDTOtoBookConvertor)
    } catch (e) {
        //we should do some sort of error processing in this catch statement
        console.log(e)
        throw new Error('un-implemented error handling')
    } finally {
        // we make sure client isn't undefined
        client && client.release()//then we release it
    }
}

export async function findbookById(id:number) {
    let client: PoolClient;
    try{
        //id = '1 or 1 = 1; drop table l${schema}.books cascade; select * from l${schema}.book '
        client = await connectionPool.connect()
        let results: QueryResult = await client.query(`select b.book_id, b."pages", b.chapters, b."ISBN" ,b.series , b.number_in_series , b.publisher , b.publishing_date , b.title, array_agg(distinct (a.author)) as authors, array_agg(distinct (g.genre)) as genres 
        from ${schema}.books b 
        natural join ${schema}.books_authors ba 
        natural join ${schema}.authors a
        natural join ${schema}.books_genre bg
        natural join ${schema}.genre g
        where b.book_id = ${id}
        group by b.book_id;`)//directly inputting user values is very dangerous
        //sql injction which is very bad, we will learn how to fix with a parameterized query
        if(results.rowCount === 0){
            throw new Error('NotFound')
        }else{
            return BookDTOtoBookConvertor(results.rows[0])
        }
    }catch(e){
        //some real error handling
        if(e.message === 'NotFound'){
            throw new BookNotFoundError()
        }
        console.log(e)
        throw new Error('un-implemented error handling')
    }finally{
        client && client.release()
    }
}


