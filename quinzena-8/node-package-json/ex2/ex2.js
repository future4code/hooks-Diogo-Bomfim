//2) Questão
operacao = process.argv[2]
n1 = Number(process.argv[3])
n2 = Number(process.argv[4])

switch(operacao) {
    case "soma":
        return console.log(`Resposta: ${n1 + n2}`)
    case "subt":
        return console.log(`Resposta: ${n1 - n2}`)
    case "mult":
        return console.log(`Resposta: ${n1 * n2}`)
    case "div":
        return console.log(`Resposta: ${n1 / n2}`)
}