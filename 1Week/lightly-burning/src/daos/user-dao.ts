import { PoolClient } from "pg";
import { connectionPool } from ".";
import { UserDTOtoUserConvertor } from "../utils/UserDTO-to-User-convertor";


export async function getAllUsers(){
    //first thing is declare a client
    let client:PoolClient
    try{
        //get a connection
        client = await connectionPool.connect()
        //send the query
        let results = await client.query(`select u.user_id, u.username , u."password" , u.email ,r.role_id , r."role" from lightlyburning.users u left join lightlyburning.roles r on u."role" = r.role_id;`)
        return results.rows.map(UserDTOtoUserConvertor)//return the rows
    }catch(e){
        //if we get an error we don't know 
        console.log(e)
        throw new Error('Unhandled Error Occured')
    }finally{
        //let the connectiopn go back to the pool
        client && client.release()
    }
}