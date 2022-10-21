import BaseDatabase from "./BaseDatabase";
import { post } from "../types/post"

export class PostDatabase extends BaseDatabase {
    public async createPost(post : post) {
        await BaseDatabase.connection("labook_posts")
        .insert({
            id: post.id,
            photo : post.photo,
            description : post.photo,
            type : post.type,
            author_id: post.authorId
        })
    }

    public async getPost(id : string) {
        const queryResult = await BaseDatabase.connection("labook_posts")
        .select()
        .where({ id })

        const post = {
            id: queryResult[0].id,
            photo: queryResult[0].photo,
            description: queryResult[0].description,
            type: queryResult[0].type,
            createdAt: queryResult[0].created_at,
            authorId: queryResult[0].author_id,
        }

        return post
    }
    
}