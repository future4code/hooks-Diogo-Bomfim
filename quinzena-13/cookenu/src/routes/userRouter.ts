import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();
const userController = new UserController();

// Path para criar usuário
userRouter.post("/signup", userController.createUser)

// Path para logar usuário
userRouter.get("/login", userController.userLogin)

// Path para pegar um usuário logado
userRouter.get("/profile", userController.getUserLogged)

// Path para pegar um usuário pelo id
userRouter.get("/:id", userController.getUserById)


