import isEmpty from "../COMP.SE.200-2024-2025-1/src/isEmpty.js";

describe("Tests for isEmpty", () => {
    test("Null value", () => {
        expect(isEmpty(null)).toBe(true)
    });

    test("True value", () => {
        expect(isEmpty(true)).toBe(true)
    });

    test("Value is 1", () => {
        expect(isEmpty(1)).toBe(true)
    });

    test("Value is a list with elements", () => {
        expect(isEmpty([1, 2, 3])).toBe(false)
    });

    test("Value is a string", () => {
        expect(isEmpty('abc')).toBe(false)
    });

    test("Value is a dictionary with elements", () => {
        expect(isEmpty({ 'a': 1 })).toBe(false)
    });

})