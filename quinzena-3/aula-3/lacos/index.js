// Exercícios de interpretação de código

// Questão 1 
/*
a) O código está somando 2 à variável valor até que ele atinja o número 10 
b) 10
*/

// Questão 2
/* 
a) 19
   21
   23
   27
   30 
*/

// Questão 3
/* 
a) *
   **
   ***
   ****
*/

// Exercícios de escrita de código

// Questão 1 

let numeroDeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))

if (numeroDeBichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
}

else {
    let contador = 0
    let nomeDoBichinho 
    let nomesBichinhos = []
    
    while (numeroDeBichinhos !== contador) {
        nomeDoBichinho = prompt("Digite o nome do(s) seu(s) bichinho(s) um por um")
        nomesBichinhos.push(nomeDoBichinho)
        contador++
    }

    console.log(nomesBichinhos)
}

// Questão 2 

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

const imprimir = (array) => {
    for (item of arrayOriginal)
        console.log(item)
}

imprimir()

const imprimirDividido = (array) => {
    for (item of arrayOriginal)
        console.log(item / 10)
}

imprimirDividido()

const imprimePares = (array) => {
    let pares = []
    for (item of arrayOriginal)
       
        if (item %2 === 0)
            pares.push(item)
            
    console.log(pares) 
}

imprimePares()

const imprimeArrayString = (array) => {
    let arrayString = []
    let contador = 0 
    
    for (item of arrayOriginal)
        arrayString.push(`O elemento do index ${contador++} é: ${item}`)
        
    console.log(arrayString)
}

imprimeArrayString()

const listaMaiorMenor = (array) => {
    let maior = 0 
    let menor = 99999999999999
    
    for (item of arrayOriginal)

        if (item > maior) {
            maior = item
        }

        else if (item < menor) {
            menor = item
        }

        console.log(`O maior número é ${maior} e o menor é ${menor}`)
    }

listaMaiorMenor()

// Desafios

// Desafio 1

const numCerto = Number(prompt("Qual número deseja usar? "))
let numChute
let contador  = 0 

while (numCerto !== numChute) {
    numChute = Number(prompt("Qual número deseja chutar? "))
    contador++
    console.log(`O número chutado foi ${numChute}`)


    if (numCerto > numChute) {
        console.log("Errrrrrou, é maior")
    }

    else if (numCerto < numChute){
        console.log("Errrrrrou, é menor")
    }
}

console.log("Acertou!!!")
console.log(`O número de tentativas foi ${contador}`)

// Desafio 2

const numRandom = Math.floor(Math.random() * 11)
let numUsuario
let count  = 0  

while (numRandom !== numUsuario) {
    numUsuario = Number(prompt("Qual número deseja chutar? "))
    count++
    console.log(`O número chutado foi ${numUsuario}`)


    if (numCerto > numUsuario) {
        console.log("Errrrrrou, é maior")
    }

    else if (numCerto < numUsuario){
        console.log("Errrrrrou, é menor")
    }
}

console.log("Acertou!!!")
console.log(`O número de tentativas foi ${count}`)