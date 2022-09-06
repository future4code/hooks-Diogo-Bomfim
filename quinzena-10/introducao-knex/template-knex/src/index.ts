import express from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Exercício 01
app.get("/usuarios", async (req, res) => {
  let errorCode = 400
  try {
    const search = req.query.search

    if (search) {
      const result = await connection.raw(`
        SELECT * FROM Funcionarios
        WHERE nome = "${search}";
      `)

      res.status(200).send(result[0])
    }

    else if (search === "") {
      const result = await connection.raw(`
        SELECT * FROM Funcionarios;
      `)
      
      res.status(200).send(result[0])
    }
  }

  catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// Exercício 02
app.post("/criar-usuario", async (req, res) => {
  let errorCode = 400
  try {
    const name = req.body.name
    const email = req.body.email

    if (!name || !email) {
      throw new Error("Passe nome e o email para cadastro!")
    }

    else if (typeof name != "string" || typeof email != "string") {
      throw new Error("Nome e email precisam ser strings!")
    }

    else if (name.length < 4) {
      throw new Error("Nome precisa ter no mínimo 4 letras!")
    }

    else if (!email.includes("@")) {
      throw new Error("O email precisa ter o caracter @")
    }

    const newUser = {
      // Usei o id mockado porque a tabela tá com INT invés de BIGINT, aí fiz isso pra não precisar dar drop
      id : 5,
      nome : name,
      email : email
    }

    await connection.raw(`
      INSERT INTO Funcionarios(id, nome, email)
      VALUES(${newUser.id}, "${newUser.nome}", "${newUser.email}")
    `)

    res.status(200).send("Usuário criado!")
  }

  catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// Exercício 03
app.put("/usuarios/editar-email/:id", async (req, res) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const email = req.body.email

    const funcionario = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE id = ${id};
    `)

    if (!id || !email) {
      throw new Error("Passe id e o email do usuário!")
    }

    else if (typeof email != "string") {
      throw new Error("O email do usuário precisa ser string!")
    }

    else if (!email.includes("@")) {
      throw new Error("O email precisa ter o caracter @!")
    }

    else if (funcionario[0].length === 0) {
      throw new Error("Usuário não encontrado!")
    }

    await connection.raw(`
      UPDATE Funcionarios
      SET email = "${email}"
      WHERE id = ${id};
    `)

    res.status(200).send("Email alterado")
  }

  catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// Exercício 04
app.delete("/usuarios/deletar/:id", async (req, res) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    const funcionario = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE id = ${id};
    `)

    if (funcionario[0].length === 0) {
      throw new Error("Usuário não encontrado!")
    }

    await connection.raw(`
      DELETE FROM Funcionarios
      WHERE id = ${id};
    `)

    res.status(200).send("Usuário deletado")
  }

  catch (error) {
    res.status(errorCode).send(error.message)
  }
})