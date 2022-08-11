// A / B 
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// C
type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {}
}
