import express from "express";
import { AddressInfo } from "net";
import { customers } from "./data";
import { Customer } from "./data";
import { ExtractArr } from "./data";

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

/*Constante(s) para utilizar em mais de uma requisição*/

// pegar data atual
let date = new Date();
let day = String(date.getDate()).padStart(2, '0');
let month = String(date.getMonth() + 1).padStart(2, '0');
let year = date.getFullYear();
const currentDate = day + '/' + month + '/' + year;


// 1) Criar cliente
app.post("/create-user", (req, res) => {
    // requisições de body
    const accountName = req.body.name
    const accountCpf = req.body.cpf
    const accountBirthDate = req.body.birthDate

    // verificação idade do cliente
    const currentYear = new Date().getFullYear()
    const customerYear = accountBirthDate.split("/")[2]
    const customerAge = currentYear - customerYear
    
    // verificação cliente já cadastrado
    const index = customers.findIndex((inCustomers) => {
        if (inCustomers.cpf === accountCpf) { 
            return true 
        }

    else { return false }
    })
    
    if (index === -1 && customerAge >= 18) {
        const newCostumer = {
            name: accountName,
            cpf: accountCpf,
            birthDate: accountBirthDate,
            balance: 0,
            extract: []
        }
            
        customers.push(newCostumer)
        res.send(customers)
    }

    else {
        res.send("Você não pode se cadastrar")
    }
})

// 2) Mostrar saldo de um cliente
app.get("/show-balance", (req, res) => {
    // requisições de header
    const customerName = req.headers.name
    const customerCpf = req.headers.cpf

    const showBalance = customers.find((customer) => {
            if  (customer.name === customerName && customer.cpf === customerCpf) {
                return customer
            }
    })

    showBalance === undefined ? res.send("Usuário não encontrado!") : res.send(showBalance)
})

// 3) Adicionar saldo a um cliente
app.put("/add-balance", (req, res) => {
    // requisições de header
    const customerName = req.headers.name
    const customerCpf = req.headers.cpf
    const balanceToAdd = req.body.balanceToAdd
    
    // variavél para guardar novo saldo do cliente
    let newBalance: Customer[] = []
    
    const index = customers.findIndex((customer) => {
        if (customer.name === customerName && customer.cpf === customerCpf) {
            newBalance.push(customer.balance = customer.balance + balanceToAdd)
            return true
        }

        else { return false }

    })

    if (index === -1) {
        res.send("Usuário não encontrado!")
    }

    else if (index !== -1) {
        res.send(`Seu novo saldo é de R$ ${newBalance}`)
    }
})

// 4) Pagar uma conta
app.put("/pay-bill", (req, res) => {
    // requisições de header
    const customerName = req.headers.name
    const customerCpf = req.headers.cpf
    
    // requisições de body
    const valBill = Number(req.body.valBill)
    const descBill = req.body.descBill
    const dateBill = req.body.dateBill

    // variavél para guardar o cliente
    let customerTarget: Customer[] = []

    // separando a data do pagamento em variáveis 
    const dtbill = dateBill.replace("/","")
    const dayBill= dtbill.slice(0,2)
    const monthBill = dtbill.slice(2,4)
    const yearBill = dtbill.slice(5)
    
    // verificação de data
    const dateVef = dayBill >= day && monthBill >= month && yearBill >= year || 
                    dayBill < day && monthBill > month && yearBill >= year || 
                    dayBill <= day && monthBill <= month && yearBill > year||
                    dayBill >= day && monthBill <= month && yearBill > year

    
    const index = customers.findIndex((customer) => {
        if (customer.name === customerName && customer.cpf === customerCpf && valBill <= customer.balance && dateVef) {
            
            customer.balance = customer.balance - valBill
            const newExtract: ExtractArr = {
                val: valBill,
                desc: descBill,
                date: dateBill === "" ? currentDate : dateBill 
            }

            customer.extract.push(newExtract)
            customerTarget.push(customer)
            return true
        }
        
        else { return false }
    })

    if (index === -1) {
        res.send("Não foi possível completar a transação!")
    }

    else if (index !== -1) {
        res.send(customerTarget)
    } 
})

// 5) Transferência interna
app.put("/transaction", (req, res) => {
    try {
        
        // requisições de headers
        const nameSender = req.headers.name
        const cpfSender = req.headers.cpf
        
        // requisições de body
        const nameRecipient = req.body.nameRecipient
        const cpfRecipient = req.body.cpfRecipient
        const valueTransferred = req.body.valueTransferred
        
        // variavél para guardar foundStatus do cliente
        let senderStatus = false
        let recipientStatus = false
        let foundStatus = false

        customers.map((customer) => {
            
            if (customer.name === nameSender && customer.cpf === cpfSender) {
                if (customer.balance >= valueTransferred) {
                    senderStatus = true
                    customer.balance = customer.balance - valueTransferred
                }

                else {throw new Error("O destinatário não possui a quantia disponível no momento")}
            }

            else if (customer.name === nameRecipient && customer.cpf === cpfRecipient) {
                recipientStatus = true
                customer.balance = customer.balance + valueTransferred
            }
        
            if (senderStatus === true && recipientStatus === true) {
                foundStatus = true
            }
        })

        if (foundStatus === false) {
            throw new Error("Destinatário ou remetente não encontrado")
        }

        res.send(customers)
    } 
    
    catch (err : any) {
        switch (err.message) {
            case "Destinatário ou remetente não encontrado":
              res.status(404)
              break
            
            case "O destinatário não possui a quantia disponível no momento": 
              res.status(400)
              break
            
            default: 
              res.status(500)
          }  
        
        res.send(err.message || "Erro inesperado")
    }
})
