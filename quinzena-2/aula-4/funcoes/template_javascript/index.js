//Exercícios de interpretação de código//

/* Questão 1 
a) 10 
   50
b) Não apareceria nada no console pois o return não serve para imprimir
*/

/* Questão 2 
a) Ela joga toda frase escrita para minúsculo e verifica se a frase inclui o parâmetro string escolhido ("cenoura")

b) i true 
   ii true
   iii true
*/

//Exercícios de escrita de código//

//Questão 1//

//letra a//
function infos () {
    const nome = "Diogo"
    const idade = 19
    const cidade = "Aracaju"
    const estudante =  "sou"

    console.log(`Eu sou ${(nome)}, tenho ${idade} anos, moro em ${cidade} e ${estudante} estudante.`)
}

infos() 

//letra b//
function infos (nome, idade, cidade, profissao) {
    
    return `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`
}

console.log(infos("diogo", 19, "Aracaju", "Estudante")) 

//Questão 2//

//letra a//
function soma (x, y) {
    const somando = x + y
    return somando 
}

console.log(soma(7,10)) 

//letra b//
function maiorIgual(x, y) {
    const comparar = x >= y
    return comparar
}

console.log(maiorIgual(221,22))
 

//letra c//
function par (x) {
    const par = x % 2 === 0 
    return par
}

console.log(par(10)) 

//letra d//
function tamanhoEUppercase (string) {
    
    const frase = "oi tudo bem?"
    const tamanho = frase.length
    
    console.log(frase.toUpperCase(), tamanho) 
}

tamanhoEUppercase() 

//Questão 3//

const x = Number(prompt("Digite um número"))
const y = Number(prompt("Digite outro número"))

function soma (x, y) {
    return x + y 
}

function diferenca (x, y) {
    return x - y 
}

function multiplicacao (x, y) {
    return x * y 
}

function divisao (x, y) {
    return x / y 
}

console.log(`Números inseridos: ${x} e ${y} \nSoma: ${soma(x,y)}\nDiferença: ${diferenca(x,y)}\nMultiplicação: ${multiplicacao(x,y)}\nDivisão: ${divisao(x,y)}`)
