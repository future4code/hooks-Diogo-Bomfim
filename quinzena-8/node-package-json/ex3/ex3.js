//3) Questão
let tarefas = ["Lavar a louça", "Comprar Leite"]

const tarefa = `${process.argv[2]} ${process.argv[3]} ${process.argv[4]}`

tarefas.push(tarefa)
console.log(tarefas)