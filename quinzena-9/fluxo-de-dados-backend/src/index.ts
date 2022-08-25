import express from "express";
import { AddressInfo } from "net";
import { produtos } from "./data";
// import gerador de id
import { v4 as uuidv4, v4 } from 'uuid';


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

// 1) 
app.get("/test", (req, res) => {
    res.send("Tá funcional!")
})

// 3) 
app.post("/create-product", (req, res) => {
    const productName = req.body.name
    const productPrice = req.body.price

    try {

        if (productName === "" || productPrice <= 0) {
            throw new Error("Nome ou Valor vazios!")
        }

        else if (typeof productName !== "string") {
            throw new Error("O nome não é uma string!")
        }

        else if (typeof productPrice !== "number") {
            throw new Error("O valor não é number!")
        }

        else {
            const newProduct = {
                id: uuidv4(),
                name: productName,
                price: productPrice 
            }
    
            produtos.push(newProduct)
            res.send("Produto criado")
        }
    } 
    
    catch (error : any) {
        res.send(error.message)
    }
})

// 4) 
app.get("/products", (req, res) => {
    res.send(produtos)
})

// 5)
app.put("/products-att/:id", (req, res) => {
    const idProduct = req.params.id
    const newPrice = req.body.price

    produtos.map((produto) => {
        
        try {

            if (typeof newPrice !== "number") {
                throw new Error("Preço diferente de number")
            }

            else if (newPrice <= 0) {
                throw new Error("Preço menor ou igual a zero") 
            }

            else if (produto.id === idProduct) {
                produto.price = newPrice
                res.send(produtos)
            }

            else {
                throw new Error("não encontrado") 
            }
        } 
        
        catch (error : any) {
            console.log(error.message)
        }
    })
})

// 6) 
app.delete("/products-delete/:id", (req, res) => {
    const idProduct = req.params.id

    produtos.map((produto, index) => {
        try {

            if (idProduct === produto.id) {
                produtos.splice(index, 1)
            }

            else {
                throw new Error("não encontrado") 
            }
        } 
        
        catch (error : any) {
            console.log(error.message)
        }
    })

    res.send(produtos)
})



