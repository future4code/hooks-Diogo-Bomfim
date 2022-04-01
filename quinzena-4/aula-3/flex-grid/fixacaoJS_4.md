```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let contador = 0 
  
  for (item of arrayDeNumeros) {
    
    if (item === numeroEscolhido) {
      contador +=1 
    }
  } 
  
   if (contador === 0){
	return `Número não encontrado`
}
  return `O número ${numeroEscolhido} aparece ${contador}x`
}
```