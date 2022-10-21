import express from "express";
import { FriendController } from "../controller/FriendController";

export const friendRouter = express.Router();
const friendController = new FriendController();

friendRouter.get("/friendPosts", friendController.getPostFriendsController)

friendRouter.post("/create", friendController.makeFriendship)

friendRouter.delete("/delete/:id", friendController.deleteFriendship)