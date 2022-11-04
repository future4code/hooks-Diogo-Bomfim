import BaseDatabase from "./BaseDataBase";
import { User } from "../types/User";

export class UserDatabase extends BaseDatabase {
  public async signUp(user: User) {
    await BaseDatabase.connection("Auth_users").insert({
      id: user.id,
      email: user.email,
      password: user.password,
    });
  }

  public async getUserByEmail(email: string) {
    const result = await BaseDatabase.connection("Auth_users")
      .select()
      .where({ email });

    return result[0];
  }

  public async getUserById(id: string) {
    const result = await BaseDatabase.connection("Auth_users")
      .select()
      .where({ id });

    return result[0];
  }
}
