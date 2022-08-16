import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

type personType = {id: number, name: string, phone: number, email: string, website: string}

const arrayUsers : personType[] = [{
    id: 1,
    name: "John",
    phone: 5598238912,
    email: "John@example.com",
    website: "http://John.com"
},
{
    id: 2,
    name: "Cleiton",
    phone: 5557238122,
    email: "Cleiton@example.com",
    website: "http://Cleiton.com"
},
{
    id: 3,
    name: "Jorge",
    phone: 5898338212,
    email: "Jorge@example.com",
    website: "http://Jorge.com"
}]

// 4) 
app.get("/users", (req, res) => {          
    res.send(arrayUsers)
})

// 5) - 7)
type posts = {id: number, title: string, body: string, userId: number}

// Considero melhor criar o array fora pois fica mais organizado
const arrayPosts : posts[] = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 2,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 3,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }]

app.get("/posts", (req, res) => {          
    res.send(arrayPosts)
})

// 8)
app.get("/posts/:userId", (req, res) => {          
    const userId = Number(req.params.userId)
    const searchPost = arrayPosts.map((array) => {
        if (array.userId === userId) {
            res.send(array)
        }
    })
    
    res.send(searchPost)
})


