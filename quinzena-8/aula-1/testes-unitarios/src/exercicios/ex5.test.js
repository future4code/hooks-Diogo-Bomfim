import { fraseComInicialM } from "./ex5"

describe("Retorna frase com iniciais em maiúsculo", () => {
    
    test("retorna 'ola' com inicial em maiúsculo", () => {
        const resultado = fraseComInicialM("ola")

        expect(resultado).toEqual("Ola")
    })

    test("retorna 'ola, mundo' com inicial em maiúsculo", () => {
        const resultado = fraseComInicialM("ola, mundo")

        expect(resultado).toEqual("Ola, Mundo")
    })

    test("retorna 'eu sou o bob, aluno da labenu' com inicial em maiúsculo", () => {
        const resultado = fraseComInicialM("eu sou o bob, aluno da labenu")

        expect(resultado).toEqual("Eu Sou O Bob, Aluno Da Labenu")
    })
})