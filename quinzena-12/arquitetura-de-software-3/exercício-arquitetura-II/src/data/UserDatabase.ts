import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

   private userTable = 'Architecture_User'

   public insertUser = async (
      user: user
   ) => {
      try {
         await UserDatabase.connection.insert({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email,
            password: user.password
         }).into(this.userTable)
      } catch (error: any) {
         throw new Error(error.message)
      }

   }

}
