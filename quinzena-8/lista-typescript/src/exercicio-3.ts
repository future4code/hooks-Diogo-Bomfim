enum Generos {
    ACAO = "ação",
      DRAMA ="drama",
      COMEDIA ="comédia",
      ROMANCE ="romance",
      TERROR = "terror"
  }
  
  const filmesAdd = {
    nome : "",
    anoLancamento : Number(),
    genero : "",
    pontuacao : Number()
  }
  
  const listarFilme = (nome: string, ano: number, genero: any, pontuacao:number) => {
    filmesAdd.nome = nome
    filmesAdd.anoLancamento = ano
    filmesAdd.genero = genero
    filmesAdd.pontuacao = pontuacao
    return console.log(filmesAdd)
  }
  
  listarFilme("A maldição de Node.JS", 1999, Generos.TERROR, 100)