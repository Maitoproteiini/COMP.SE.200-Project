import isArguments from "../COMP.SE.200-2024-2025-1/src/isArguments.js";

describe("Tests for isArguments", () => {
    test("Function processOrder should receive arguments object", () => {
        function processOrder() {
        return isArguments(arguments);
        }
        expect(processOrder({ id: 1, total: 100 }, { id: 2, total: 50 })).toBe(true);
    });

    test("Null or undefined order data returns false", () => {
        expect(isArguments(null)).toBe(false);
        expect(isArguments(undefined)).toBe(false);
    });

    test("Regular function objects are not arguments objects", () => {
        function checkout() { return "done"; }
        expect(isArguments(checkout)).toBe(false);
    });

})