// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura"))
  const largura = Number(prompt("Digite a largura"))
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite seu ano atual"))
  const anoNascimento = Number(prompt("Digite seu ano de nascimento"))
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome")
  const idade = Number(prompt("Digite sua idade"))
  const email = prompt("Digite seu e-mail")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite uma cor") 
  const cor2 = prompt("Digite outra cor") 
  const cor3 = prompt("Digite outra cor") 

  cores = [cor1, cor2, cor3]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  return (custo / valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return array[array.length -1]
}
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const array0 = array.shift()
  const array999 = array.pop()
  const ultimoParaPrimeiro = array.push(array0)
  const primeiroParaUltima = array.unshift(array999)

  return array
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Qual seu ano de nascimento?"))
  const anoCarteiraEmitida = Number(prompt("Em que ano sua identidade foi emitida?"))
  const idade = anoAtual - anoNascimento
  const anoRenov = anoAtual - anoCarteiraEmitida

  const caso1 = idade <= 20 && anoRenov == 5 
  const caso2 = (idade >= 20 && idade <= 50) && anoRenov >= 10
  const caso3 = idade > 50 && anoRenov >= 15
  console.log( caso1 || caso2 || caso3 )
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  
  const caso1 = ano % 4 === 0
  const caso2 = ano % 100 !== 0
  const caso3 = ano % 400 === 0

  return caso1 && caso2 || caso3 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  
  const idade = prompt("Você tem mais de 18 anos?")
  const ensinoM = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  const idadeVal = idade === "sim" 
  const ensinoVal = ensinoM === "sim"
  const disponibilidadeval = disponibilidade === "sim" 

  console.log(idadeVal && ensinoVal && disponibilidadeval)

}
