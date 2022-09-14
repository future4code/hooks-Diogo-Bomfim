import app from "./app";
import connection from "./database/connection";

// Exercício 01 
app.get("/users", async (req, res) => {
    const name = req.query.name

    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${name}%";
   `)

   res.status(200).send(result[0])
})

app.get("/users/:type", async (req, res) => {
    const type = req.params.type

    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE type LIKE "%${type}%";
   `)

   res.status(200).send(result[0])
})

// Exercício 02
app.get("/users/filter/:info", async (req, res) => {
    let typeOrName = req.params.info 

    if (typeOrName === ":info") {
        const result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            ORDER BY email ASC;
        `)
        res.status(200).send(result[0])
    }
    else {
        const result = await connection.raw(`
         SELECT * FROM aula48_exercicio
         WHERE name LIKE "%${typeOrName}%" OR type LIKE "%${typeOrName}%"
         ORDER BY name ASC;
       `)
    
       res.status(200).send(result[0])
    }
})

// Exercício 03
app.get("/showAllUsers", async (req, res) => {
    const pag = Number(req.query.pag)
    let offset = 5 * (pag -1)

    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      ORDER BY name ASC
      LIMIT 5
      OFFSET ${offset};
   `)

   res.status(200).send(result[0])
})

// Exercício 04
app.get("/userAllFuncs", async (req, res) => {
    let typeOrName = req.query.info
    const pag = Number(req.query.pag)
    let offset = 5 * (pag -1)

    if (typeOrName && pag) {
        const result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE name LIKE "%${typeOrName}%" OR type LIKE "%${typeOrName}%"
            ORDER BY name ASC
            LIMIT 5
            OFFSET ${offset};
       `)

       res.status(200).send(result[0])
    }

    else if (!typeOrName && !pag) {
        const result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            ORDER BY name DESC
       `)

       res.status(200).send(result[0])
    }

    else if (typeOrName) {
        const result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            WHERE name LIKE "%${typeOrName}%" OR type LIKE "%${typeOrName}%"
            ORDER BY name ASC
            LIMIT 5;
        `)

        res.status(200).send(result[0])
    }

    else if (pag) {
        const result = await connection.raw(`
            SELECT * FROM aula48_exercicio
            ORDER BY name ASC
            LIMIT 5
            OFFSET ${offset};
        `)

        res.status(200).send(result[0])
    }
})