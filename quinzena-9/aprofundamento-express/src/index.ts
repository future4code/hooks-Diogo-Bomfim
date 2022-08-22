import express from "express";
import { request } from "http";

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

//1) 
//app.get("/ping", (req, res) => {          
    //res.send("Pong! 🏓")
//})

//2) - (4)
type todoTypes = {userId: number, id: number, title: string, completed: boolean}

const todo : todoTypes[] = [{
    "userId": 1,
    "id": 1,
    "title": "dormir",
    "completed": true
  },
  {
    "userId": 2,
    "id": 2,
    "title": "jogar",
    "completed": true
  },
  {
    "userId": 3,
    "id": 3,
    "title": "lavar a casa",
    "completed": false
  }]

app.get("/todos", (req, res) => {          
    let complete : todoTypes[] = []
    todo.map((completed) => {
        if (completed.completed === false) {
            complete.push(completed)
        }
    })
    res.send(complete)
})

//5) 
app.post("/todos/create", (req, res) => {          
        const todoTitle = req.body.title
        const todoIsCompleted = req.body.completed
        
        const newTodo = {
            "userId": 4,
            "id": 4,
            "title": todoTitle,
            "completed": todoIsCompleted
        }

        todo.push(newTodo)
        res.send(todo)
})

//6)
app.post("/todos/modifyStatus/:idPost", (req, res) => {          
    const id = Number(req.params.idPost)

    todo.map((todos, index) => {
        if (todos.id === id) {
            todo.splice(index, 1)
            const newStatus = {
                ...todos , completed: !todos.completed, 
            }
            
            todo.push(newStatus)
        }
    })

    res.send(todo)
})

//7)
app.delete("/todos/delete/:idPost", (req, res) => {          
    const id = Number(req.params.idPost)

    todo.map((todos, index) => {
        if (todos.id === id) {
            todo.splice(index, 1)
        }
    })
   res.send(todo)
})

//8)
app.get("/todos/todo/:userId", (req, res) => {
    const id = Number(req.params.userId)
    const todoUser : todoTypes[] = []

    todo.map((todos) => {
        if (todos.id === id) {
            todoUser.push(todos)
        }
    })
    res.send(todoUser)
})