import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body

            const userBusiness = new UserBusiness();
            await userBusiness.createUser(name, email, password);

            res.status(200).send({ message: "Usuário cadastrado" });
        } catch (error: any) {
            res.status(400).send({ message: error.message });
        }
    }
}