import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_NAME = "User_Arq";

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string
  ): Promise<void> {
    try {
      await BaseDatabase.connection()
        .insert({
          id,
          email,
          name,
          password,
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async get() {
    try {
      const users = [];

      const result = await BaseDatabase.connection()
        .select("*")
        .from(UserDatabase.TABLE_NAME);

      for (let user of result) {
        users.push(user);
      }

      return users;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async deleteUser(id: string): Promise<void> {
    try {
      await BaseDatabase.connection()
        .where({ id })
        .from(UserDatabase.TABLE_NAME)
        .delete();
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
