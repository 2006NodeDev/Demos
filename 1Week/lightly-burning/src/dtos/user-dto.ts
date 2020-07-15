export class UserDTO {
    user_id:number
    username:string
    password:string
    email:string
    role:string
    role_id:number
    image?:string//this is a path to the file in cloud storage
}