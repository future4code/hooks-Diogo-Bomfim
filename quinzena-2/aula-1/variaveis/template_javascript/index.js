
//QUESTÕES INTERPRETATIVAS//
/* 1- 
      10 
      10 5 
 */

/* 2 - 
    10 10 10 
    */

/* 3 -  
    horasTrabalhadasPorDia
    valorRecebidoPorDia
 */

//QUESTÕES ESCRITAS//

let nome = null
let idade = null

console.log(typeof nome, typeof idade)
//O tipo objeto foi impresso pois as variáveis estão vazias//

nome = prompt("Qual seu nome?")
idade = Number(prompt("Qual sua idade?"))

console.log(typeof nome, typeof idade)

//Notei que não precisei declarar as variáveis novamente para usar, e assim elas também foram preenchidas com os dados digitados//

console.log("Olá", nome,"você tem", idade, "anos") 

// QUESTÃO 2 //

const pergunta1 = "Você gosta de comer?"
const pergunta2 = "Você já comeu hoje?"
const pergunta3 = "Você vai comer antes de dormir?"

const respostaPergunta1 = "SIM"
const respostaPergunta2 = "SIM"
const respostaPergunta3 = "NÃO"

console.log(pergunta1, respostaPergunta1)
console.log(pergunta2, respostaPergunta2)
console.log(pergunta3, respostaPergunta3)
 
// QUESTÃO 3 //

let a = 10
let b = 25

c =  a 
a = b 
b = c 

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)