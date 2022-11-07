import { PostDatabase } from "../data/PostDatabase";
import { generateId } from "../services/generateId";
import { POST_TYPES } from "../types/postTypes";

export class PostBusiness {
    public async createPost(photo: string, description: string, type: POST_TYPES, authorId: string) {
        if (!photo || !description || !type || !authorId) {
            throw new Error('"photo", "description" and "type" must be provided')
         }

         const post = {
            id : generateId(),
            photo,
            description,
            type,
            authorId
         }

         const postDatabase = new PostDatabase();
         await postDatabase.createPost(post)
    }

    public async getPost(id : string) {
        const postDatabase = new PostDatabase();
        const result = await postDatabase.getPost(id);

        return result
    }
}