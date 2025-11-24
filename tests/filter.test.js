import filter from "../COMP.SE.200-2024-2025-1/src/filter.js";

describe("Tests for filter", () => {
    test("Return active users", () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred', active: false}
        ];
        const result = filter(users, ({ active }) => active);
        expect(result).toEqual([{ user: 'barney', active: true }])
    });

    test("Returns in-stock products", () => {
        const products = [
            { product: 'banana', instock: true },
            { product: 'apple', instock: false},
            { product: 'milk', instock: true }
        ];
        const result = filter(products, ({ instock }) => instock);
        expect(result).toEqual([
            { product: 'banana', instock: true },
            { product: 'milk', instock: true}
        ])
    });

})