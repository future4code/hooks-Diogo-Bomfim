//1) Questão
//a) process.argv[index]
const nome = process.argv[2]
const idade = Number(process.argv[3])

//b) 
console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//c) 
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)