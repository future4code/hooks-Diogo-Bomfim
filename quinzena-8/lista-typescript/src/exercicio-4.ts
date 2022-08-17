enum Setores {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
  }
  
  const funcionarios =  [
      { nome: "Marcos", salário: 2500, setor: Setores.MARKETING, presencial: true },
      { nome: "Maria" ,salário: 1500, setor: Setores.VENDAS, presencial: false},
      { nome: "Salete" ,salário: 2200, setor: Setores.FINANCEIRO, presencial: true},
      { nome: "João" ,salário: 2800, setor: Setores.MARKETING, presencial: false},
      { nome: "Josué" ,salário: 5500, setor: Setores.FINANCEIRO, presencial: true},
      { nome: "Natalia" ,salário: 4700, setor: Setores.VENDAS, presencial: true},
      { nome: "Paola" ,salário: 3500, setor: Setores.MARKETING, presencial: true }  
  ] 
  
  const retornoMarkPresencial = (array: any[]) => {
    let marPresencial: any[] = []
    array.filter((func) => {
      if (func.setor === Setores.MARKETING && func.presencial === true) {
        marPresencial.push(func)
      }
    })
    return console.log(marPresencial)
  }
  
  retornoMarkPresencial(funcionarios)