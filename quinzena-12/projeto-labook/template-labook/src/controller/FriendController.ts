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
      const idUser = req.body.idUser;
      const idFriend = req.body.idFriend;

      const friendBusiness = new FriendBusiness();
      await friendBusiness.deleteFriendship(idUser, idFriend);

      res.status(200).send({ message: "Amizade desfeita!" });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async showPosts(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const friendBusiness = new FriendBusiness();
      const result = await friendBusiness.showPosts(id);

      res.status(200).send({ message: result[0] });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
}
