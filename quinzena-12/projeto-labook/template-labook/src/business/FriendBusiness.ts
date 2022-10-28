import { FrienDatabase } from "../data/FriendDatabase";
import { friend } from "../types/friend";

export class FriendBusiness {
    public async makeFriendship( friend: friend) {
    
        const friendDatabase = new FrienDatabase();
        await friendDatabase.makeFriendship(friend)
    }

    public async deleteFriendship(id_user: string, id_friend: string) {
        
        const friendDatabase = new FrienDatabase();
        await friendDatabase.deleteFriendship(id_user, id_friend)
    }

    public async showPosts(friendId: string) {

        const friendDatabase = new FrienDatabase();
        const result = await friendDatabase.showPosts(friendId)

        return result
    }
}