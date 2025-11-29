import upperFirst from "../../COMP.SE.200-2024-2025-1/src/upperFirst.js";

describe('upperFirst', () => {
  test('should convert the first character of a lowercase string to uppercase', () => {
    expect(upperFirst('fred')).toBe('Fred');
  });

  test('should leave the first character uppercase if it is already uppercase', () => {
    expect(upperFirst('Fred')).toBe('Fred');
    expect(upperFirst('FRED')).toBe('FRED');
  });

  test('should handle single-character strings', () => {
    expect(upperFirst('a')).toBe('A');
    expect(upperFirst('A')).toBe('A');
  });

  test('should return empty string when input is empty', () => {
    expect(upperFirst('')).toBe('');
  });

  test('should not affect non-alphabetic first characters', () => {
    expect(upperFirst('1abc')).toBe('1abc');
    expect(upperFirst('#abc')).toBe('#abc');
  });

  test('should only change the first character', () => {
    expect(upperFirst('fRED')).toBe('FRED');
  });

  test('should handle strings with spaces', () => {
    expect(upperFirst(' hello')).toBe(' hello'); // first char is a space
    expect(upperFirst('hello world')).toBe('Hello world');
  });

  test('should handle Unicode characters', () => {
    expect(upperFirst('ñandú')).toBe('Ñandú');
    expect(upperFirst('ßeta')).toBe('SSeta'); // JS converts ß to SS in toUpperCase
  });

  test('should handle strings that start with multiple spaces', () => {
    expect(upperFirst('   leading')).toBe('   leading'); // first character is still a space
  });

  test('should handle strings that start with emojis', () => {
    expect(upperFirst('😀 smile')).toBe('😀 smile'); // emoji should remain unchanged
  });

  test('should coerce non-string input to string', () => {
    expect(upperFirst(null)).toBe('');
    expect(upperFirst(undefined)).toBe('');
    //expect(upperFirst(123)).toBe('123');
    //expect(upperFirst(true)).toBe('True');
    //expect(upperFirst({ key: 'value' })).toBe('[object Object]');
    });


  test('should handle strings with combining characters', () => {
    // example: é composed of e + accent
    expect(upperFirst('e\u0301clair')).toBe('E\u0301clair');
  });

  test('should handle strings with surrogate pairs (e.g., emojis) correctly', () => {
    expect(upperFirst('𝟘number')).toBe('𝟘number'); // 𝟘 is a mathematical double-struck zero
  });

  test('should not change the rest of the string', () => {
    expect(upperFirst('hello WORLD')).toBe('Hello WORLD');
  });

  test('should handle very long strings', () => {
    const longString = 'a'.repeat(10000);
    expect(upperFirst(longString)).toBe('A' + 'a'.repeat(9999));
  });
});
