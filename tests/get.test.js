import get from "../COMP.SE.200-2024-2025-1/src/get.js";

describe("Tests for get", () => {
    test("Value when path is string", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        const path = 'a[0].b.c'
        const result = get(object, path);
        expect(result).toBe(3)
    });

    test("Value when path is array", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        const path = ['a', '0', 'b', 'c']
        const result = get(object, path);
        expect(result).toBe(3)
    });

    test("Value when path is string and default is given", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        const path = 'a.b.c'
        const result = get(object, path, 'default');
        expect(result).toBe('default')
    });

})