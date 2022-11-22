import BaseDatabase from "./BaseDatabase";
import { user } from "../models/user";

export class UserDatabase extends BaseDatabase {
  public async createUser(user: user) {
    await BaseDatabase.connection("Cookenu_users").insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }

  // Método utilizado no login
  public async findUser(email: string) {
    const result = await BaseDatabase.connection("Cookenu_users")
      .select()
      .where({ email });

    return result[0];
  }

  // Método utilizado para pegar um user pelo token de autenticação
  public async getUserLogged(id: string) {
    const result = await BaseDatabase.connection("Cookenu_users")
      .select("id", "name", "email")
      .where({ id });

    return result[0];
  }

  public async getUserById(id: string) {
    const result = await BaseDatabase.connection("Cookenu_users")
      .select("id", "name", "email")
      .where({ id });

    return result[0];
  }
}
