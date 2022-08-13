const separarData = (nome: string, dataNasc: string) => {
    const dataRef = dataNasc.replace("/","")
    return console.log(`Olá me chamo ${nome}, nasci no dia ${dataRef.slice(0,2)} do mês de ${dataRef.slice(2,4)} do ano de ${dataRef.slice(5)}`)
  }
  
  separarData("Diogo","29/06/2002")