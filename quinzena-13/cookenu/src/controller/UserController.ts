import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { userDTO, loginDTO } from "../models/user";

const userBusiness = new UserBusiness();

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const user: userDTO = {
        name,
        email,
        password,
      };

      const token = await userBusiness.createUser(user);
      res.status(200).send({ data: token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async userLogin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const login: loginDTO = {
        email,
        password,
      };

      const token = await userBusiness.userLogin(login);
      res.status(200).send({ data: token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async getUserLogged(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;

      const user = await userBusiness.getUserLogged(token);

      res.status(200).send({ data: user });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const { id } = req.params;

      const user = await userBusiness.getUserById(id, token);

      res.status(200).send({ data: user });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
