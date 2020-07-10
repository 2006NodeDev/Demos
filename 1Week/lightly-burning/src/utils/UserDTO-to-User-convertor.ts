import { UserDTO } from "../dtos/user-dto";
import { User } from "../models/User";

export function UserDTOtoUserConvertor( udto:UserDTO):User{
    return {
        userId:udto.user_id,
        username: udto.username,
        password: udto.password,
        email: udto.email,
        role: udto.role,
        image:udto.image
    }
}