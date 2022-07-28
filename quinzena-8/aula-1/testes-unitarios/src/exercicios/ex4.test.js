import { ordernarArray } from "./ex4";

describe("Retorna array ordenado", () => {
    test("retorna [3, 2, 1] ordenado", () => {
        const resultado = ordernarArray([3, 2, 1])

        expect(resultado).toEqual([1, 2, 3])
    });

    test("retorna [4, 7, 1, 3] ordenado", () => {
        const resultado = ordernarArray([4, 7, 1, 3])

        expect(resultado).toEqual([1, 3, 4, 7])
    });

    test("retorna [20, -1, -4, 0, 6] ordenado", () => {
        const resultado = ordernarArray([20, -1, -4, 0, 6])

        expect(resultado).toEqual([-4, -1, 0, 6, 20])
    });
    
})