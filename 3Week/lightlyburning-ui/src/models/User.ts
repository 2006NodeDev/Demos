export interface User {
    userId:number//identifier
    username:string
    password:string
    email:string
    role:string
    image?:string//the ? makes it optional
}