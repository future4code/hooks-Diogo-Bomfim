import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    async createPost(req: Request, res: Response) {
        try {
            const { photo, description, type, authorId } = req.body

            const postBusiness = new PostBusiness();
            await postBusiness.createPost(photo, description, type, authorId);

            res.status(200).send({ message: "Post cadastrado" });
        } catch (error: any) {
            res.status(400).send({ message: error.message });
        }
    }

    async getPost(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const postBusiness = new PostBusiness();
            const result = await postBusiness.getPost(id);

            res.status(200).send({ message: result });
        } catch (error: any) {
            res.status(400).send({ message: error.message });
        }
    }
}