import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true para [1,2,1]", () => {
        const result = checaItensDuplicados([1,2,1])

        expect(result).toEqual(true)
    })

    test("retorna true para [a, a, b, c]", () => {
        const result = checaItensDuplicados(["a", "a", "b", "c"])

        expect(result).toEqual(true)
    })

    test("retorna true para [5, 5, 3, 6, 5, 6]", () => {
        const result = checaItensDuplicados([5, 5, 3, 6, 5, 6])

        expect(result).toEqual(true)
    })

    test("retorna false para [1, 2, 3]", () => {
        const result = checaItensDuplicados([1, 2, 3])

        expect(result).toEqual(false)
    })

    test("retorna false para []", () => {
        const result = checaItensDuplicados([])

        expect(result).toEqual(false)
    })

});
