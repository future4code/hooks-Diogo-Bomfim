console.log("Boas vindas ao jogo Blackjack!")

   if (confirm("Quer iniciar uma nova rodada? ")) {
        
      const usuario = comprarCarta()
      const computador = comprarCarta()
      const usuarioDiffCarta = comprarCarta()
      const computadorDiffCarta = comprarCarta()
      const pontoUsuario = usuario.valor + usuarioDiffCarta.valor
      const pontoComputador = computador.valor + computadorDiffCarta.valor
      
   console.log(`Usuário - cartas: ${usuario.texto} ${usuarioDiffCarta.texto} - pontuação ${usuario.valor + usuarioDiffCarta.valor}`)

   console.log(`Computador - cartas: ${computador.texto} ${computadorDiffCarta.texto} - pontuação ${computador.valor + computadorDiffCarta.valor}`)

   if (pontoUsuario > pontoComputador) {
      console.log("O usuário ganhou!")
   }

   else if (pontoUsuario < pontoComputador) {
      console.log("O computador ganhou!")
   }

   else {
      console.log("Empate")
   }   
}
   else {
      console.log("O jogo acabou")
   }

    