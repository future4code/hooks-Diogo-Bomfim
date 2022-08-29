import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./data"
import { user } from "./data";
import { request } from "http";

const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

// 1)
app.get("/users", (req, res) => {
    res.send(users)
})

// 2)
app.get("/users/:type", (req, res) => {
    const tipoUser = req.params.type

    let usersTypeSearch: user[] = []

    users.map((user) => {
        if (user.type === tipoUser.toUpperCase()) {
            usersTypeSearch.push(user)
        }
    })

    res.send(usersTypeSearch)
})

// 3) 
app.get("/users/search/:userName", (req, res) => {
    try {
        const userName = req.params.userName

        let userFound = false

        const searchUser = users.filter((user) => {
            if (user.name === userName) {
                userFound = true
                return user
            }
        })

        if (userFound === false) {
            throw new Error("User not found")
        }

        res.send(searchUser)
    } 
    
    catch(err : any) {
        switch(err.message) { 
            case "User not found":
                res.status(404)
                break
            default:
                res.status(500)
        }

        res.send(err.message || "erro inesperado") 
    }  
})

// 4) 
// a) Nada, funciona da mesma forma
// b) Não, put deve ser usado quando a intenção é fazer a mudança de um elemento já existente 
app.put("/users/create", (req, res) => {
    //vou usar um id mockado por que o data já veio com id number definido, e usando o uuid alteraria pra string :)
    const id = req.body.id 
    const name = req.body.name
    const email = req.body.email
    const type = req.body.type
    const age = req.body.age

    const novoUser = {
        id,
        name,
        email,
        type,
        age,
    }

    users.push(novoUser)
    res.send(users)
})