export type ExtractArr = {
    val: number, 
    desc: string, 
    date: string
}

export type Customer = {
    name: string, 
    cpf: string, 
    birthDate:string, 
    balance:number, 
    extract: ExtractArr[]
}

export const customers: Customer[] = [{
    name: "Diogo",
    cpf: "12345",
    birthDate: "29/06/2002",
    balance: 1000,
    extract: []
},
{
    name: "Pedro",
    cpf: "56789",
    birthDate: "12/12/2000",
    balance: 500,
    extract: [],
}]

