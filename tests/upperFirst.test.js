import upperFirst from "../COMP.SE.200-2024-2025-1/src/upperFirst.js";

describe("Tests for upperFirst", () => {
    test("First letter is uppercase", () => {
        expect(upperFirst("Banana")).toBe("Banana")
    });

    test("First letter is lowercase", () => {
        expect(upperFirst("banana")).toBe("Banana")
    });

    test("First letter is a number as string", () => {
        expect(upperFirst("3")).toBe("3")
        expect(upperFirst("3banana")).toBe("3banana")
        expect(upperFirst("3.1")).toBe("3.1")
        expect(upperFirst("3.1banana")).toBe("3.1banana")
    });

    test("Empty string", () => {
        expect(upperFirst("")).toBe("")
    });

    test("Only spaces", () => {
        expect(upperFirst(" ")).toBe(" ")
    });

    test("Non-ASCII characters", () => {
        expect(upperFirst("Š")).toBe("Š")
    });

    test("Special characters", () => {
        expect(upperFirst(",")).toBe(",")
        // New tests, not in test plan:
        expect(upperFirst(".")).toBe(".")
        expect(upperFirst("£@$€${[{€")).toBe("£@$€${[{€")
    });

    test("Leading spaces", () => {
        expect(upperFirst(" banana")).toBe(" banana")
    });

    test("Whole word is uppercase", () => {
        expect(upperFirst("BANANA")).toBe("BANANA")
    });

    test("Lowercase and uppercase mixed", () => {
        expect(upperFirst("Banana apples")).toBe("Banana apples")
        expect(upperFirst("Banana Apples")).toBe("Banana Apples")
        // New test, not in test plan
        expect(upperFirst("banana apples")).toBe("Banana apples")
    });

    test("Single char", () => {
        expect(upperFirst("B")).toBe("B")
        expect(upperFirst("b")).toBe("B")
    });

    test("Non-string input", () => {
        expect(upperFirst(null)).toBe("")
        // Function expects a string type
        expect(upperFirst(String(3))).toBe("3")
        expect(upperFirst(String(3.1))).toBe("3.1")
        // New tests, not in test plan:
        // Function expects a string type
        expect(upperFirst(String(true))).toBe("True")
        expect(upperFirst(undefined)).toBe("")
    });

})
