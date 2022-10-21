import { UserDatabase } from "../data/UserDatabase"
import { generateId } from "../services/generateId";

export class UserBusiness {
    async createUser(name: string, email: string, password: string) {
        if (!name || !email || !password) {
            throw new Error('"name", "email" and "password" must be provided')
         }

         const user = {
            id : generateId(),
            name,
            email,
            password
         }

         const userDatabase = new UserDatabase();
         await userDatabase.createUser(user);
    }
}