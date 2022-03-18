// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const novoArray = []

    for (item of array) {
        if (item %2 === 0) {
            novoArray.push(item)
        }
    }
    
    return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const novoArray = []

    for (item of array) {
        if (item %2 === 0) {
            novoArray.push(item * item)
        }
    }
    
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNum = 0
  
    for (item of array) {
        if (item >= maiorNum) {
            maiorNum = item
        }
    }
    
    return maiorNum
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = Math.max(num1, num2)
    const menorNumero = Math.min(num1 , num2)
    const diferenca = maiorNumero - menorNumero
    let maiorDivisivelPorMenor = false
     
    if ((maiorNumero % menorNumero) === 0) {
         maiorDivisivelPorMenor = true
    }
    
    return {"maiorNumero": maiorNumero,"maiorDivisivelPorMenor": maiorDivisivelPorMenor,"diferenca":diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = [];
    
    for (i = 0; pares.length < n; i += 2) {
        pares.push(i)
    }
    
    return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    }

    else if (ladoA === ladoB && ladoA !== ladoC || ladoA === ladoC && ladoA !== ladoB || ladoB === ladoA && ladoB !== ladoC || ladoB === ladoC && ladoB !== ladoA || ladoC === ladoA && ladoC !== ladoB || ladoC === ladoB && ladoC !== ladoA) {
        return "Isósceles"
    }

    else if (ladoA !== ladoB !== ladoC) {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}