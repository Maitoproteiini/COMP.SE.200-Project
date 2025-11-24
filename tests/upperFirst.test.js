import upperFirst from "../COMP.SE.200-2024-2025-1/src/upperFirst.js";

describe("Tests for upperFirst", () => {
    test("First letter is uppercase -> word stays as it is", () => {
        expect(upperFirst("Banana")).toBe("Banana")
    });

    
})