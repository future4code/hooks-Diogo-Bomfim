//Exercícios de interpretação de código//

//Questão 1//

/*
a) false
b) false
c) true 
d) boolean 
*/

//Questão 2//

/*
a) Da forma que o código está escrito haverá uma concatenação dos números digitados, para resolver isso basta colocar o prompt dentro da estrutura Number().
*/ 

//Exercícios de escrita de código//

//Questão 1// 

const idade = Number(prompt("Qual sua idade?"))
const idadeBf = Number(prompt("Qual a idade do seu(ua) melhor amigo(a)?"))

const compararIdade = idade > idadeBf
const difIdade = idade - idadeBf 

console.log("Sua idade é maior do que a do(a) seu(ua) melhor amigo(a)?", compararIdade)
console.log("A diferença de idade é de", difIdade, "anos") 

//Questão 2//

const numPar = Number(prompt("Insira um número par"))
const restoDiv = numPar % 2 

console.log(restoDiv) 

//R: O padrão é que números pares possuem resto da divisão 0 e números impares resto da divisão 1//

//Questão 3//

const idade = Number(prompt("Digite sua idade em anos"))
const idadeMes = idade * 12 
const idadeDias = idade * 365  
const idadeHoras =  (365 * 24) * idade 

console.log(idadeMes) 
console.log(idadeDias) 
console.log(idadeHoras)

//Questão 4//

const x = Number(prompt("Digite um número"))
const y = Number(prompt("Digite outro número"))

const primeiroMaior = x > y 
const primeiroIgual = x === y 
const primeiroDiv = (x % y) === 0
const segundoDiv = (y % x) === 0

console.log("O primeiro numero é maior que segundo?", primeiroMaior)
console.log("O primeiro numero é igual ao segundo?", primeiroIgual)
console.log("O primeiro numero é divisível pelo segundo?", primeiroDiv)
console.log("O segundo numero é divisível pelo primeiro?", segundoDiv)