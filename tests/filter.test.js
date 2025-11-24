import filter from "../COMP.SE.200-2024-2025-1/src/filter.js";

describe("Tests for upperFirst", () => {
    test("Return even numbers", () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7];
        const result = filter(numbers, (value) => value % 2 === 0);
        expect(result).toEqual([2, 4, 6]);
    });

    test("Return odd numbers", () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7];
        const result = filter(numbers, (value) => value % 2 !== 0);
        expect(result).toEqual([1, 3, 5, 7]);
    });

    test("Return empty array of arrays if predicate is not satisfied", () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7];
        const result = filter(numbers, (value) => value > 10);
        expect(result).toEqual([[]]);
    });

})