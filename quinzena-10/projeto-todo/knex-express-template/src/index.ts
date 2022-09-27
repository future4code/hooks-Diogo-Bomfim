import app from "./app";
import { v4 as uuidv4 } from "uuid";
import connection from "./database/connection";

// Endpoint 01 - Criar Usuário
app.post("/user", async (req, res) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const nickname = req.body.nickname
        const email = req.body.email

        if (!name || !nickname || !email) {
            throw new Error("Os campos não estão completos!")
        }

        const newUser = {
            id : uuidv4(),
            name,
            nickname,
            email
        }

        await connection.raw(`
            INSERT INTO TodoUserList(id, name, nickname, email)
            VALUES("${newUser.id}", "${newUser.name}", "${newUser.nickname}", "${newUser.email}");
        `)

        res.status(200).send("Usuário criado!")
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// Endpoint 02 - Pegar Usuário por Id
app.get("/user/:id", async (req, res) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const user = await connection.raw(`
            SELECT id, nickname FROM TodoUserList
            WHERE id = "${id}";
        `)

        if (user[0].length === 0) {
            throw new Error("Usuário não encontrado!")
        }

        res.status(200).send(user[0])
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// Endpoint 03 - Editar Usuário
app.put("/user/edit/:id", async (req, res) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const name = req.body.name
        const nickname = req.body.nickname

        if (!name || !nickname) {
            throw new Error("Os campos não estão completos!")
        }

        await connection.raw(`
            UPDATE TodoUserList
            SET name = "${name}", nickname = "${nickname}"
            WHERE id = "${id}";
        `)

        res.status(200).send("alterado")
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// Endpoint 04 - Criar uma Task
app.post("/task", async (req, res) => {
    let errorCode = 400
    try {
        const title = req.body.title
        const description = req.body.description
        const limitDate = req.body.limit_date
        const creatorUserId = req.body.creator_user_id

        // Variável para a data em formato DD/MM/YYYY funcionar
        const vefDate = `${limitDate.slice(6)}/${limitDate.slice(3,5)}/${limitDate.slice(0,2)}`

        if (!title || !description || !limitDate || !creatorUserId) {
            throw new Error("Os campos não estão completos!")
        }

        const newTodo = {
            id : uuidv4(),
            title,
            description,
            vefDate,
            creatorUserId
        }
        
        await connection.raw(`
            INSERT INTO TodoTaskList(id, title, description, limit_date, creator_user_id)
            VALUES("${newTodo.id}", "${newTodo.title}", "${newTodo.description}", "${vefDate}", "${newTodo.creatorUserId}");
        `)

        res.status(200).send("Task criada!")
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// Endpoint 05 - Pegar Task por Id
app.get("/task/:id", async (req, res) => {
    let errorCode = 400
    try {
        const id = req.params.id
        
        const task = await connection.raw(`
            SELECT TodoTaskList.*, DATE_FORMAT(limit_date,'%d/%m/%Y') as limit_date, TodoUserList.nickname
            FROM TodoUserList, TodoTaskList 
            WHERE TodoUserList.id = TodoTaskList.creator_user_id AND TodoTaskList.id = "${id}";
        `)

        if (task[0].length === 0) {
            throw new Error ("A task digitada não foi encontrada!")
        }

        res.status(200).send(task[0])
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// Endpoint 06 - Pegar Todos Usuários
app.get("/getuser", async (req, res) => {
    const result = await connection.raw(`
        SELECT * FROM TodoUserList
    `)

    res.send(result[0])
})

// Endpoint 07 - Pegar Tasks Criadas por um Usuário
app.get("/user/task/:id" ,async (req, res) => {
    let errorCode = 400
    try {
        const id = req.params.id

        if (id.length < 4) {
            throw new Error("Os campos não estão completos!")
        }

        const task = await connection.raw(`
            SELECT TodoTaskList.*, DATE_FORMAT(limit_date,'%d/%m/%Y') as limit_date, TodoUserList.nickname
            FROM TodoUserList, TodoTaskList 
            WHERE TodoTaskList.creator_user_id = "${id}" AND TodoUserList.id = "${id}";
        `)

        res.status(200).send(task[0])
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// Endpoint 08 - Pesquisar Usuário
app.get("/user/search/:name", async (req, res) => {
    let errorCode = 400
    try {
        const name = req.params.name

        if (name === ":name") {
            throw new Error("Os campos não estão completos!")
        }

        const user = await connection.raw(`
            SELECT id, nickname 
            FROM TodoUserList
            WHERE name = "${name}" OR email = "${name}";
        `)

        res.status(200).send(user[0])
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// Endpoint 12 - Atualizar o Status da Task pelo Id
app.put("/task/status/:id/", async (req, res) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const status = req.body.status

        if (id.length < 4 || !status) {
            throw new Error("Os campos não estão completos!")
        }

        await connection.raw(`
            UPDATE TodoTaskList
            SET status = "${status}"
            WHERE id = "${id}";
        `)

        res.status(200).send("Status alterado!")
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// Endpoint 13 - Pegar Todas as Tasks por Status
app.get("/task", async (req, res) => {
    let errorCode = 400
    try {
        const status = req.query.status

        if (!status) {
            throw new Error("Os campos não estão completos!")
        }

        const result = await connection.raw(`
            SELECT TodoTaskList.*, DATE_FORMAT(limit_date,'%d/%m/%Y') as limit_date, TodoUserList.nickname
            FROM TodoUserList, TodoTaskList
            WHERE TodoTaskList.status = "${status}"  
            AND TodoTaskList.creator_user_id = TodoUserList.id;
        `)

        res.status(200).send(result[0])
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// Endpoint 19 - Deletar Task
app.delete("/task/delete/:id", async (req, res) => {
    let errorCode = 400
    try {
        const id = req.params.id

        if (id.length < 4) {
            throw new Error("Os campos não estão completos!")
        }

        await connection.raw(`
            DELETE FROM TodoTaskList
            WHERE id = "${id}";
        `)

        res.status(200).send("Task apagada!")
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// Endpoint 20 - Deletar Usuário
app.delete("/user/delete/:id", async (req, res) => {
    let errorCode = 400
    try {
        const id = req.params.id

        if (id.length < 4) {
            throw new Error("Os campos não estão completos!")
        }

        await connection.raw(`
            DELETE FROM TodoTaskList WHERE creator_user_id = "${id}";
            DELETE FROM TodoUserList WHERE id = "${id}";
        `)

        res.status(200).send("Usuário e suas tasks apagados!")
    }

    catch (error : any) {
        res.status(errorCode).send(error.message)
    }
})

// Endpoint Bônus - Pegar Todas as Tasks
app.get("/tasks", async (req, res) => {
    const result = await connection.raw(`
        SELECT * FROM TodoTaskList
    `)

    res.send(result[0])
})