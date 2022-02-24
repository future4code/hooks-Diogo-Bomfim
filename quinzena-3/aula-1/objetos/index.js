//Exercícios de interpretação de código//

/* QUESTÃO 1

a) Matheus Nachtergaele

b) Virginia Cavendish

c) {canal: 'Globo', horario: '14h'} */

/* QUESTÃO 2

a)  {nome: 'Juca', idade: 3, raca: 'SRD'}
  
a)  {nome: 'Juba', idade: 3, raca: 'SRD'}

a)  {nome: 'Jubo', idade: 3, raca: 'SRD'}

b) Faz com o que o objeto mencionado após os pontos seja copiado para outra variável
*/

/* QUESTÃO 3

a) false

a) undefined

b) O valor impresso foi undefined pois a propriedade Altura não existia, logo ele adicionou a propriedade e não atribuiu valor*/

//Exercícios de escrita de código//

// QUESTÃO 1 //

const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

const imprimeApelido = (objeto) => {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

imprimeApelido(pessoa)

const novaPessoa = {
    ... pessoa,
    apelidos: ["Manduxa", "Amandita", "Mands"]
}

imprimeApelido(novaPessoa) 

// QUESTÃO 2 //

const infos1 = {
    nome: "Diogo",
    idade: 19,
    profissao: "Estudante"
}

const infos2 = {
    nome: "João",
    idade: 34,
    profissao: "Nadador"
}

const retornaInfos = (objeto1, objeto2) => {
    
    objeto1 = [objeto1.nome, objeto1.nome.length ,objeto1.idade, objeto1.profissao, objeto1.profissao.length]
    objeto2 = [objeto2.nome, objeto2.nome.length ,objeto2.idade, objeto2.profissao, objeto2.profissao.length]
    
    console.log(objeto1)
    console.log(objeto2)
}  

retornaInfos(infos1, infos2)

// QUESTÃO 3 //

let carrinho = []

const fruta1 = {
    nome: "Uva",
    disponibilidade: true,
}

const fruta2 = {
    nome: "Tomate",
    disponibilidade: true,
}

const fruta3 = {
    nome: "Morango",
    disponibilidade: true,
}

const carrinhoDeFruta = (objeto1, objeto2, objeto3) => {
    carrinho.push(objeto1, objeto2, objeto3)
}

carrinhoDeFruta(fruta1, fruta2, fruta3)
console.log(carrinho)

//DESAFIOS// 

// DESAFIO 1 //

const infos = (objeto) => {
    const nome = prompt("Qual seu nome?")
    const idade = Number(prompt("Qual sua idade?"))
    const profissao = prompt("Qual sua profissão?")

    objeto = {nome, idade, profissao}
    return objeto
}

console.log(infos())

// DESAFIO 2 //

const filme = (objeto1, objeto2) => {
    objeto1 = {
        nome: "Friday 13",
        anoLancamento: 1980
    }
    
    objeto2 = {
        nome: "Scream 5",
        anoLancamento: 2022
    }

    console.log(`O primeiro filme foi lançado antes do segundo? ${objeto1.anoLancamento < objeto2.anoLancamento}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${objeto1.anoLancamento === objeto2.anoLancamento }`)
}

filme()

// DESAFIO 3 //

let carrinho = []

const fruta1 = {
    nome: "Uva",
    disponibilidade: true,
}

const fruta2 = {
    nome: "Tomate",
    disponibilidade: true,
}

const fruta3 = {
    nome: "Morango",
    disponibilidade: true,
}

const carrinhoDeFruta = (objeto1, objeto2, objeto3) => {
    carrinho.push(objeto1, objeto2, objeto3)
}

carrinhoDeFruta(fruta1, fruta2, fruta3)

const estoqueCarrinhoDeFruta = (objeto) => {

    return carrinho[objeto.disponibilidade = false] 
}

estoqueCarrinhoDeFruta(fruta1)
console.log(carrinho) 