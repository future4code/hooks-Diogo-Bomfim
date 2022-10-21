import { Request, Response } from "express";
import { FriendBusiness } from "../business/FriendBusiness";

export class FriendController {
  async makeFriendship(req: Request, res: Response) {
    try {
      const { idUser, idFriend } = req.body;

      const friends = {
        idUser,
        idFriend,
      };

      const friendBusiness = new FriendBusiness();
      await friendBusiness.makeFriendship(friends);

      res.status(200).send({ message: "Amizade feita!" });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async deleteFriendship(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const friendBusiness = new FriendBusiness();
      await friendBusiness.deleteFriendship(id);

      res.status(200).send({ message: "Amizade desfeita!" });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
}
