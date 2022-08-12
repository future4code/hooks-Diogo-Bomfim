//const minhaString: string = 0 // Erro pois a tipagem pede uma string
//const meuNumero: number = "olá" // Erro pois a tipagem pede um number 
const meuNumeroOuString: string | number = "olá" // Sinal de | "ou"

type pessoa = {nome: string, idade: number, corFavorita: Cores}

enum Cores {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

const pessoa1: pessoa = {
    nome: "Diogo",
    idade: 20,
    corFavorita: Cores.AZUL
}

const pessoa2: pessoa = {
    nome: " João",
    idade: 21,
    corFavorita: Cores.VERMELHO
}

const pessoa3: pessoa = {
    nome: "Pedro",
    idade: 22,
    corFavorita: Cores.ANIL
}

console.log(pessoa1)