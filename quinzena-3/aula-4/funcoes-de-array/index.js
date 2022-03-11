// Exercícios de interpretação de código

/* Questão 1
{nome: Amanda Rangel apelido: Mandi} 0 [{},{},{}]
{nome: Laís Petra apelido: Laura} 1 [{},{},{}]
{nome: Letícia Chijo apelido: Chijo} 2 [{},{},{}]
*/

/* Questão 2
[Amanda Rangel, Laís Petra, Letícia Chijo]
*/

/* Questão 3
{nome: Amanda Rangel apelido: Mandi}
{nome: Laís Petra apelido: Laura}
*/

// Exercícios de escrita de código

// Questão 1

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

//a)
const nomeDog = pets.map((item) => {
    return item.nome
})
 
console.log(nomeDog)

//b) 
const salsichaDog = pets.filter((item) => {
    return item.raca === "Salsicha"
})

console.log(salsichaDog)

//c) 
const poodleDog = pets.filter((item) => {
    return item.raca === "Poodle"
})

const mensagemDog = poodleDog.map((item => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
}))

console.log(mensagemDog)

// Questão 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a)
const nomeItem = produtos.map((item) => {
    return item.nome
})

console.log(nomeItem)

//b) 
const descontoItem = produtos.map(item => {
    const novoPreco =  item.preco - (item.preco * 0.05) 
    const ItensNomePreco = [item.nome, novoPreco.toFixed(2)]
    
    return ItensNomePreco 
})

console.log(descontoItem)

//c)
const bebidasItem = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})

console.log(bebidasItem)

//d) 
const ypeItem = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})

console.log(ypeItem)

//e) 
const mensagemYpe = ypeItem.map((item) => {
    return `Compre ${item.nome} por R$${item.preco}`
})

console.log(mensagemYpe)

// DESAFIOS

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a) 
 const pokemonsAlfabetico = pokemons.map((item) => {
    return item.nome
 })

 console.log(pokemonsAlfabetico.sort())

 //b) 
 const tipoUnico = []
 for (itens of tipoUnico) {
    
    if (tipoUnico.includes(itens.tipo)){
    } 
    
    else {
        tipoUnico.push(itens.tipo)
    }  
 }
 
 console.log(tipoUnico)