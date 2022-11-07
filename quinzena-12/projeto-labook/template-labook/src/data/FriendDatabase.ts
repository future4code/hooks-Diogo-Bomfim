import BaseDatabase from "./BaseDatabase";
import { friend } from "../types/friend";

export class FrienDatabase extends BaseDatabase {
  public async makeFriendship(friend: friend) {
    await BaseDatabase.connection("labook_friends").insert({
      id_user: friend.idUser,
      id_friend: friend.idFriend,
    });
  }

  public async deleteFriendship(id_user: string, id_friend: string) {
    await BaseDatabase.connection("labook_friends")
    .where({"id_user" : id_user, "id_friend" : id_friend})
    .del();
  }

  public async showPosts(friendId: string) {
   const result = await BaseDatabase.connection.raw(`
        SELECT labook_friends.id_friend, labook_users.name as Usuário, labook_posts.photo,
            labook_posts.description, labook_posts.created_at, labook_posts.type 
            FROM labook_friends
            INNER JOIN labook_users ON labook_friends.id_friend = labook_users.id
            INNER JOIN labook_posts ON labook_friends.id_friend = labook_posts.author_id
            WHERE labook_friends.id_user = "${friendId}"
            ORDER BY created_at DESC;
    `);

    return result
  }
}
