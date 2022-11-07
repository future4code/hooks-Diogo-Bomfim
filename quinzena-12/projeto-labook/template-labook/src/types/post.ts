import { POST_TYPES } from "./postTypes"

export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
 }