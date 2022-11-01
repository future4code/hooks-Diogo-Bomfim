import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/generateId";
import { UserDTO } from "../types/UserDTO";

const userDatabase = new UserDatabase();
const authenticator = new Authenticator();

export class UserBusiness {
  async signUp(user: UserDTO) {
    try {
      if (!user.email || user.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }

      if (!user.password || user.password.length < 6) {
        throw new Error("Invalid password");
      }

      const id = generateId();

      const newUser = {
        id,
        email: user.email,
        password: user.password,
      };

      await userDatabase.signUp(newUser);
      const token = authenticator.generateToken({ id });

      return token;
    } catch (error: any) {
      return error.message;
    }
  }

  async login(email: string, password: string) {
    try {
      if (!email || email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }

      const user = await userDatabase.getUserByEmail(email);

      if (password !== user.password) {
        throw new Error("Invalid password");
      }

      const token = authenticator.generateToken({ id: user.id });

      return token;
    } catch (error: any) {
      return error.message;
    }
  }

  async getUserLogged(token: string) {
    try {
      const authenticationData = authenticator.getData(token);
      const user = await userDatabase.getUserById(authenticationData.id);

      return user;
    } catch (error: any) {
      return error.message;
    }
  }
}
