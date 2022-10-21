import { FrienDatabase } from "../data/FriendDatabase";
import { friend } from "../types/friend";

export class FriendBusiness {
    public async makeFriendship( friend: friend) {
        
        const friendDatabase = new FrienDatabase();
        await friendDatabase.makeFriendship(friend)
    }

    public async deleteFriendship(id: string) {
        
        const friendDatabase = new FrienDatabase();
        await friendDatabase.deleteFriendship(id)
    }
}