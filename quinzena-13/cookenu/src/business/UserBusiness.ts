import { UserDatabase } from "../data/UserDatabase";
import { user, userDTO, loginDTO } from "../models/user";
import { generateId } from "../services/generateId";
import {
  CustomError,
  IncorrectPassword,
  InvalidAuthenticatorData,
  InvalidEmail,
  InvalidInfos,
  InvalidPassword,
  InvalidToken,
} from "../error/CustomError";
import { TokenGenerator } from "../services/TokenGenerator";
import { HashManager } from "../services/HashManager";

const userDatabase = new UserDatabase();
const tokenGenerator = new TokenGenerator();
const hashManager = new HashManager();


export class UserBusiness {
  async createUser(user: userDTO) {
    try {
      if (!user.name || !user.email || !user.password) {
        throw new InvalidInfos();
      }

      if (!user.email.includes("@")) {
        throw new InvalidEmail();
      }

      if (user.password.length < 6) {
        throw new InvalidPassword();
      }

      const id = generateId();
      const hashPassword = await hashManager.hash(user.password);

      const newUser: user = {
        id,
        name: user.name,
        email: user.email,
        password: hashPassword,
      };

      await userDatabase.createUser(newUser);
      const token = tokenGenerator.generateToken({ id });

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  async userLogin(login: loginDTO) {
    try {
      if (!login.email || !login.password) {
        throw new InvalidInfos();
      }

      if (!login.email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUser(login.email);

      const isValidPassword = await hashManager.compare(
        login.password,
        user.password
      );

      if (!isValidPassword) {
        throw new IncorrectPassword();
      }

      const token = tokenGenerator.generateToken({ id: user.id });

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  async getUserLogged(token: string) {
    try {
      if (!token) {
        throw new InvalidToken();
      }

      const authenticationData = tokenGenerator.getData(token);
      const user = await userDatabase.getUserLogged(authenticationData.id);

      return user;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  async getUserById(id: string, token: string) {
    try {
      if (!token) {
        throw new InvalidToken();
      }

      const authenticationData = tokenGenerator.getData(token);

      if (!authenticationData.id) {
        throw new InvalidAuthenticatorData();
      }

      const user = await userDatabase.getUserLogged(id);

      return user;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }
}
