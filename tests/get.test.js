import get from "get.js";

describe("Tests for get", () => {
    test("Test getting product price", () => {
        const product = {
            id: 1,
            info: [{
                price: { amount: 10, currency: 'EUR '}
            }]
        };
        const path = 'info[0].price.amount';
        const result = get(product, path);
        expect(result).toBe(10)
    });

    test("Test getting product currency", () => {
        const product = {
            id: 1,
            info: [{
                price: { amount: 10, currency: 'EUR'}
            }]
        };
        const path = ['info', '0', 'price', 'currency'];
        const result = get(product, path);
        expect(result).toBe('EUR')
    });

    test("Value when path is string and default is given", () => {
        const product = {
            id: 1,
            info: [{
                price: { amount: 10, currency: 'EUR '}
            }]
        };
        const path = 'info.price.amount'
        const result = get(product, path, 'default');
        expect(result).toBe('default')
    });

})