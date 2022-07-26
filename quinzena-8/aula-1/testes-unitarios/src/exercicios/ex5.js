export const fraseComInicialM = (frase) => {
    const fraseDividida = frase.split(" ")
  
    return fraseDividida.map((palavra) => {
      return palavra[0].toUpperCase() + palavra.substring(1)
    }).join(" ")
}