import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO } from "../types/UserDTO";

const userBusiness = new UserBusiness();

export class UserController {
  async signUp(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const newUser: UserDTO = {
        email,
        password,
      };

      const token = await userBusiness.signUp(newUser);
      res.status(200).send({ data: token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const token = await userBusiness.login(email, password);

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
}
