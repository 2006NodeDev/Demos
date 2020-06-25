// this is going to contain all the functions that interact wit hthe book table

import { PoolClient, QueryResult } from "pg";
import { connectionPool } from ".";


/*
    takes in no inputs 
    output of every book from the database
*/
//if we swap to different database like oracle, or maybe even a nosql database
//so long as this function continues to return all of the books
//we don't have to chnage any other code in the program
export async function getAllBooks(){
    let client:PoolClient;// this will be the "connection" we borrow from the pool but 
    //that process can take some time and can fail so we declare the var ahead of time
    try{
        client = await connectionPool.connect()
        let results:QueryResult = await client.query(`select * from lightlyburning.books;`)
        return results.rows
    } catch(e){
        //we should do some sort of error processing in this catch statement
        console.log(e)
        throw new Error('un-implemented error handling')
    }finally{
        // we make sure client isn't undefined
        client && client.release()//then we release it
    }
}