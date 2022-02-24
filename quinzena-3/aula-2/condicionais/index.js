// Exercícios de interpretação de código // 

/* Questão 1 
a) O teste verifica se o resto da divisão de um número por 2 é igual a 0 
b) Números pares
c) Números ímpares
*/

/* Questão 2 
a) Para precificar as frutas
b) "O preço da fruta Maçã é R$ 2.25"
C) "O preço da fruta Pêra é R$ 5.5"
*/

/* Questão 3 
a) Pedindo que o usuário faça o input de um número
b) 1 - "Esse número passou no teste" // erro porque mensagem não está declarado 
b) 2 - Erro porque mensagem não está declarado 
c) Sim, o erro ocorrerá porque mensagem está no escopo local e o console pede ele como se fosse uma variável global
*/ 

// Exercícios de escrita de código // 

// Questão 1 // 

const idadeUsuario = Number(prompt("Qual sua idade?"))

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir!!!")
}

else {
    console.log("Você não pode dirigir!!!")
}

// Questão 2 // 

const turno = prompt("Digite o turno que você estuda [M/V/N]").toLocaleUpperCase()

if (turno == "M") {
    console.log("Bom dia!")
}

else if (turno === "V") {
    console.log("Boa tarde!")
}

else if (turno === "N") {
    console.log("Boa noite!")
}

else {
    console.log("Termo digitado não conhecido :(")
}

// Questão 3 // 

const turno = prompt("Digite o turno que você estuda [M/V/N]").toLocaleUpperCase()

switch (turno) {
    case "M":
        console.log("Bom dia!")
        break

    case "V":
        console.log("Boa tarde!")
        break

    case "N":
        console.log("Boa noite!")
        break 
    
    default:
        console.log("Termo digitado não conhecido :(")
        break
}

// Questão 4 //

const tipoFilme = prompt("Qual gênero de filme deseja assistir?").toUpperCase()
const precoIngresso = Number(prompt("Qual valor do ingresso"))

if (tipoFilme === "FANTASIA" && precoIngresso < 15) {
    console.log("Bom filme!")
}

else {
    console.log("Escolha outro filme :(")
}

// Desafios // 

// Desafio 1 //
const tipoFilme = prompt("Qual gênero de filme deseja assistir?").toUpperCase()
const precoIngresso = Number(prompt("Qual valor do ingresso"))

if (tipoFilme === "FANTASIA" && precoIngresso < 15) {
    const lanche = prompt("Qual lanche(s) vai querer levar?")
    
    console.log(`Bom filme!\nAproveite seu(ua) ${lanche}`)
}

else {
    console.log("Escolha outro filme :(")
}

// Desafio 2 //
const nomeCompleto = prompt("Digite seu nome completo")
const tipoJogo= prompt("Qual tipo de jogo? [IN / DO]").toUpperCase()
const etapaJogo = prompt("Qual etapa do jogo? [SF / DT / FI]").toUpperCase()
const categoria = Number(prompt("Qua a categoria? [1 / 2 / 3 / 4]"))
const qtdIngressos = Number(prompt("Qual quantidade de ingressos deseja comprar? "))
let valorIngresso =

console.log("---Dados da compra---")
console.log(`Nome do cliente: ${nomeCompleto}\nTipo do jogo: ${tipoJogo}\nEtapa do jogo: ${etapaJogo}\nCategoria: ${categoria}\nQuantidade de ingressos ${qtdIngressos}`)
console.log("---Valores---")

// Condicional TIPO SF
if (etapaJogo === "SF" && categoria === 1) {
    valorIngresso = 1320.00
}

else if (etapaJogo === "SF" && categoria === 2) {
    valorIngresso = 880.00
}

else if (etapaJogo === "SF" && categoria === 3) {
    valorIngresso = 550.00
}

else if (etapaJogo === "SF" && categoria === 4) {
    valorIngresso = 220.00
}

// Condicional TIPO DT 
if (etapaJogo === "DT" && categoria === 1) {
    valorIngresso = 660.00
}

else if (etapaJogo === "DT" && categoria === 2) {
    valorIngresso = 440.00
}

else if (etapaJogo === "DT" && categoria === 3) {
    valorIngresso = 330.00
}

else if (etapaJogo === "DT" && categoria === 4) {
    valorIngresso = 170.00
}

// Condicional TIPO FI
if (etapaJogo === "FI" && categoria === 1) {
    valorIngresso = 1980.00
}

else if (etapaJogo === "FI" && categoria === 2) {
    valorIngresso = 1320.00
}

else if (etapaJogo === "FI" && categoria === 3) {
    valorIngresso = 880.00
}

else if (etapaJogo === "FI" && categoria === 4) {
    valorIngresso = 330.00
}

//Condicional TIPO JOGO
if (tipoJogo === "IN") {
    const novoValor = valorIngresso / 4.10
    console.log(`Valor do ingresso: U$ ${novoValor}`)
    console.log(`Valor total:  U$ ${novoValor * qtdIngressos}`)
}

else if (tipoJogo === "DO") {
    console.log(`Valor do ingresso: R$ ${valorIngresso}`)
    console.log(`Valor total: R$ ${valorIngresso * qtdIngressos}`)  
}
