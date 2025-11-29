import isEmpty from "../../COMP.SE.200-2024-2025-1/src/isEmpty.js";

describe("Tests for isEmpty", () => {
    test("The cart is empty", () => {
        const cart = null
        expect(isEmpty(cart)).toBe(true)
    });

    test("The cart is empty", () => {
        const cartIsEmpty = true
        expect(isEmpty(cartIsEmpty)).toBe(true)
    });

    test("Cart has items", () => {
        const cart = [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 10 }
        ];
        expect(isEmpty(cart)).toBe(false)
    });

})