import BaseDatabase from "./BaseDatabase";
import { user } from "../types/user";

export class UserDatabase extends BaseDatabase {
    public async createUser(user: user) {
        await BaseDatabase.connection("labook_users")
        .insert({
            id : user.id,
            name : user.name,
            email : user.email,
            password : user.password
        })
    }
    
}