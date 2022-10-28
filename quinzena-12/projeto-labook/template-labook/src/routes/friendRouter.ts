import express from "express";
import { FriendController } from "../controller/FriendController";

export const friendRouter = express.Router();
const friendController = new FriendController();

friendRouter.get("/friendPosts/:id", friendController.showPosts)

friendRouter.post("/create", friendController.makeFriendship)

friendRouter.delete("/delete", friendController.deleteFriendship)